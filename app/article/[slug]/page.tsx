
import React, { FC } from 'react'
import Image from 'next/image';
import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";

import { allDocs } from '@/.contentlayer/generated';
import { Mdx } from '@/components/mdx';

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug:string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    console.log("Doc not found!")
    null
  }
  return doc
}


const Article:FC<PageProps> = async ({params}) => {
  const doc = await getDocFromParams(params.slug)
  if (doc) {
    return (
      <main className="flex min-h-full flex-col items-center justify-between py-24">
        <h1>{doc.title as string}</h1>
        <h5>{doc?.readingTime.minutes}</h5>
        <div><Mdx code={doc?.body.code} /></div>
      </main>
    )
  }
  else {
    return (
      <main>
        Not Found
      </main>
    )
  }
}
export default Article
