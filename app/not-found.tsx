import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {};

export default function Home() {
  return (
    <section className="bg-white dark:bg-zinc-900 flex flex-col h-[calc(100vh-350px)] md:h-[calc(100vh-400px)]">
        <div className="py-8 px-4 mx-auto my-auto flex flex-1  lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-zinc-600 dark:text-zinc-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-zinc-900 md:text-4xl dark:text-zinc-200">Something&apos;s missing.</p>
                <p className="mb-4 text-lg font-light text-zinc-500 dark:text-zinc-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                <a href="/" className="inline-flex text-zinc-200 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 my-4 transition duration-150">Back to Homepage</a>
            </div>   
        </div>
    </section>
  );
}
