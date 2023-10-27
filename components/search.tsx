"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
} from "react-instantsearch-dom";
import SearchBoxCustom from "./search-box-custom";
import SearchHitsCustom from "./search-hits-custom";
import { Search } from "lucide-react";
import Image from 'next/image'

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!
);

const SearchButton = () => {
  return (
    <InstantSearch
      searchClient={client}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDX_NAME!}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-[200px] text-left space-x-5 items-center align-middle justify-start">
            <Search className=" text-zinc-400 " size={15} />
            <span>Search</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <SearchBoxCustom />
          </DialogHeader>
          <div className="py-4 flex flex-col space-y-3">
              <SearchHitsCustom />
          </div>
          <DialogFooter>
            <span className="text-xs text-zinc-400">Search by</span>
            <a href="https://www.algolia.com/developers/" className="text-blue-600" target="_blank">
              <Image src="/algolia-logo-blue.svg" width={70} height={20} alt="Algolia Logo" />
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </InstantSearch>
  );
};

export default SearchButton;
