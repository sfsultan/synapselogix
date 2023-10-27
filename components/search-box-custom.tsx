import { connectSearchBox } from "react-instantsearch-dom";
import { Search } from "lucide-react";

function SearchBoxCustom({ refine }:any) {
  return (
    <form action="" role="search" className="relative">
      <input
        id="algolia_search"
        type="search"
        autoComplete="false"
        placeholder="Search articles"
        onChange={(e) => refine(e.currentTarget.value)}
        className="px-5 py-2 pr-10 text-md w-full outline-none"
      />
      <Search className="absolute top-3 right-5 text-zinc-400 " size={15} />
    </form>
  );
}
export default connectSearchBox(SearchBoxCustom);