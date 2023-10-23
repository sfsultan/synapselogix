import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ButtonCopy } from "@/components/ui/button-copy";
import { Metadata, ResolvingMetadata } from "next";
import { allDocs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx";
import { ClipboardCopy, AlarmClock } from "lucide-react";
import { APP_NAME, APP_URL } from "app-config";
import DisqusComments from "@/components/disqus-comments";
import { notFound } from 'next/navigation';
import { TweetButton } from "@/components/ui/button-tweet";

interface PageProps {
  params: {
    slug: string;
  };
}

type Props = {
  params: { id: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const doc = await getDocFromParams(params.slug);

  return {
    title: doc?.title,
    description: doc?.description,
    keywords: doc?.keywords,
    openGraph: {
      title: doc?.title,
      description: doc?.description,
      url: APP_URL + "/" + doc?.slug,
      siteName: APP_NAME,
      images: [
        {
          url: APP_URL + doc?.featuredImage,
          width: 1400,
          height: 600,
          alt: doc?.title + " Main Image",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: doc?.title,
      description: doc?.description,
      images: [
        {
          url: APP_URL + doc?.featuredImage,
          width: 1400,
          height: 600,
          alt: doc?.title + " Main Image",
        },
      ],
    },
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    console.log("Doc not found!");
    null;
  }
  return doc;
}

const Article: FC<PageProps> = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);
  if (doc) {
    return (
      <div className="columns-1 md:columns-2 gap-8 flex ">
        <div className="w-full px-10 md:w-4/5 lg:px-0">
          <div className="flex  flex-col justify-between ">
            <div className="flex flex-wrap pb-5">
              {doc.keywords &&
                doc.splitKeywords.map((k: string) => (
                  <span
                    key={k}
                    className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 mb-2"
                  >
                    # {k}
                  </span>
                ))}
            </div>

            <h1 className="mb-2 text-3xl font-extrabold leading-tight text-zinc-900 lg:mb-6 lg:text-4xl dark:text-zinc-200">
              {doc.title as string}
            </h1>

            <div className="flex flex-row justify-start space-x-10 italic text-sm">
              <p className="">Pubilshed by sfsultan {doc.age} ago</p>
              <p className="flex flex-row font-bold">
                <AlarmClock className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all mr-2" />
                <span>{doc?.readingTime.text}</span>
              </p>
            </div>

            <div className="space-x-2 flex flex-row sticky my-5">
              {/* <Button variant="outline" size="sm">
                <Facebook className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  mr-2" />{" "}
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all   mr-2" />{" "}
                Tweet
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all   mr-2" />{" "}
                Share
              </Button> */}
              <ButtonCopy variant="outline" size="sm">
                <ClipboardCopy className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all   mr-2" />{" "}
                Copy URL
              </ButtonCopy>
              <TweetButton 
                url={APP_URL + "/" + doc?.slug} 
                title={doc.title}
                tags={doc.keywords!}
              />
            </div>

            <div className="py-5">{doc.description && doc.description}</div>

            <div className="">
              {doc.featuredImage && (
                <div className="relative w-full m-auto max-w-[1400px] aspect-[7/4]">
                  <Image
                    src={doc.featuredImage}
                    alt={doc.title}
                    className=""
                    // width={1400}
                    // height={600}
                    // loading="lazy"
                    fill
                    sizes="(max-width: 800px) 100vw, 700px"
                  />
                </div>
              )}
              <Mdx code={doc?.body.code} />
            </div>
            <div className="w-full min-w-full mt-10">
              <DisqusComments post={doc} />
            </div>
          </div>
        </div>
        <div className="w-1/5 hidden md:block">
          <div className="sticky top-10 ">
            <h3 className="text-red-500 font-extrabold mb-5">
              In this article
            </h3>
            <ul className="flex flex-col">
              {doc.headings.map(
                (h: any) =>
                  h.level < 3 && (
                    <li
                      key={h.text}
                      className={"ml-" + (h.level == "2" ? "5" : "")}
                    >
                      <a
                        className="hover:text-blue-500 transition-all duration-150"
                        href={h.slug}
                      >
                        {h.text}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return notFound()
  }
};

export default Article;
