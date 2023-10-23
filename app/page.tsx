import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { allDocs, Doc } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { MoveRight } from "lucide-react";
import Hero from "@/components/hero";

export const metadata: Metadata = {};

export default function Home() {
  const posts: Doc[] = allDocs.sort((a, b) => {
    return compareDesc(new Date(a.published), new Date(b.published));
  });
  return (
    <>
      <Hero />
    <main className="flex min-h-[calc(100vh-400px)]">
      <div className="w-full px-10 lg:px-0">
        {allDocs.map((doc) => (
          ((process.env.NODE_ENV !== "development" && doc.status !== "draft") || process.env.NODE_ENV == "development") && <article
            key={doc._id}
            className="border-b pb-10 mb-5 relative flex flex-col md:flex-row md:space-x-5"
          >
            {doc?.featuredImage && (
              // <div className="w-full lg:w-1/4 sm:1/3 my-auto relative" >
              <div className="relative w-full m-auto sm:max-w-[550px] lg:max-w-[350px] aspect-[7/4]" >
                <Image
                  src={doc?.featuredImage}
                  alt={doc.title}
                  fill
                  loading='lazy'
                  sizes="(max-width: 300px) 100vw, 700px"
                />
              </div>
            )}
            <div>
              <div className="flex flex-row justify-between mb-5 mt-10 md:mt-0">
                <div className="flex flex-wrap">
                  {doc.keywords &&
                    doc.splitKeywords.map((k: string) => (
                      <span
                        key={k}
                        className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200  dark:text-red-800 mb-2"
                      >
                        #{k}
                      </span>
                    ))}
                </div>
                {doc.published && (
                  <p className="text-sm text-zinc-400">
                    Published {doc.age} ago
                  </p>
                )}
              </div>
              <Link href={"/article/" + doc.slug}>
                <h2 className="font-bold text-black text-2xl mb-3 dark:text-white hover:underline">
                  {doc.title}
                </h2>
              </Link>
              {doc.description && (
                <p className="text-zinc-500">{doc.description}</p>
              )}
              <a
                href=""
                className="flex flex-row space-x-3 text-red-500 self-end right-0 absolute text-sm hover:underline "
              >
                <span>Read more </span>
                <MoveRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
    </>
  );
}
