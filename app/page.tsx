import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { Button } from "@/components/ui/button";
import { allDocs, Doc } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
};

export default function Home() {
  const posts: Doc[] = allDocs.sort((a, b) => {
    return compareDesc(new Date(a.published), new Date(b.published));
  });
  return (
    <main className="flex ">
      <div className="w-full">
        {allDocs.map((doc) => (
          <article key={doc._id} className="border-b pb-10 mb-5 relative flex flex-row space-x-5">
            {doc?.featuredImage &&  <Image src={doc?.featuredImage} width={300} height={200} alt={doc.title} className="min-h-full" />} 
              <div>
            <div className="flex flex-row justify-between mb-5">
              <div className="flex flex-wrap">
                {doc.keywords && doc.splitKeywords.map((k:string) => (
                  <span key={k}
                  className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200  dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                >
                  #{k}
                </span>
                ))}
              </div>
              {doc.published && <p className="text-sm text-gray-400">Published {doc.age} ago</p> }
            </div>
            <Link href={'/article/' + doc.slug}>
              <h2 className="font-bold text-black text-2xl mb-3 dark:text-white hover:underline">{doc.title}</h2>
            </Link>
            {doc.description && <p className="text-gray-500">{doc.description}</p>}
            <a href="" className="flex flex-row space-x-3 text-blue-500 self-end right-0 absolute text-sm hover:underline "><span>Read more </span><MoveRight /></a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
