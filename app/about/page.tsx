"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Typewriter from "typewriter-effect";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail } from "lucide-react";
import { TechIcon } from "@/components/tech-icon";
import { TWITTER_URL, GITHUB_URL } from "app-config";

export default function About() {
  return (
    <section className=" flex flex-col">
      <div className="flex flex-row justify-center space-x-20">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex flex-col w-full items-center space-y-2">
          <span>Hi, I&apos;m Fahd and I&apos;m a</span>
          <span className="text-red-800 text-5xl">
            <Typewriter
              options={{
                strings: [
                  "nerd",
                  "software engineer",
                  "mentor",
                  "adventurer",
                  "blogger",
                  "web developer",
                  "consultant",
                  "traveler",
                ],
                autoStart: true,
                loop: true,
                delay: 200,
                deleteSpeed: "natural",
              }}
            />
          </span>
        </h2>
      </div>

      <div className="items-center mx-auto mt-20 flex flex-col">
        <h3 className="text-2xl font-bold mb-5 ">Reach me at 👇</h3>
        <ul className="flex flex-row space-x-5 align-top justify-start">
          <li>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://twitter.com/PyPills?ref_src=twsrc%5Etfw"
                    className="text-zinc-800 text-xl hover:bg-zinc-200 p-2 rounded-md hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-800 flex"
                    target="_blank"
                  >
                    <svg
                      data-testid="geist-icon"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      height="18"
                      width="18"
                      aria-label=""
                      className="my-auto"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-zinc-200 text-md border-zinc-900">
                  <p>Follow me on X</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="mailto:sfsultan@gmail.com"
                    className="text-zinc-800 text-xl hover:bg-zinc-200 p-2 rounded-md hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-800 flex"
                    target="_blank"
                  >
                    <Mail size={23} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-zinc-200 text-md border-zinc-900">
                  <p>Email me</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={GITHUB_URL}
                    className="text-zinc-800 text-xl hover:bg-zinc-200 p-2 rounded-md hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-800 flex"
                    target="_blank"
                  >
                    <svg
                      aria-label="github"
                      height="25"
                      viewBox="0 0 14 14"
                      width="25"
                    >
                      <path
                        d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                        fill="currentColor"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-zinc-200 text-md border-zinc-900">
                  <p>Follow me on Github</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://www.linkedin.com/in/fahd-s-16121043/"
                    className="text-zinc-800 text-xl hover:bg-zinc-200 p-1 rounded-md hover:text-zinc-600 flex"
                    target="_blank"
                  >
                    <Image
                      src="/tech/linkedin.svg"
                      width={30}
                      height={30}
                      alt="Linkedin profile"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-zinc-200 text-md border-zinc-900">
                  <p>Follow me on Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </div>

      <div className="items-center mx-auto mt-20 flex flex-col">
        <h3 className="text-2xl font-bold mb-5 flex">Tech Stack</h3>

        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          I am currently working with the below technologies. Feel free to reach
          out to collaborate or just chat ...
        </div>

        <div className="grid grid-cols-5 gap-10">
          <TechIcon imageSrc="/tech/cassandra.svg" text="Apache Cassandra" />
          <TechIcon imageSrc="/tech/kafka.svg" text="Apache Kafka" />
          <TechIcon imageSrc="/tech/docker.svg" text="Docker" />
          <TechIcon imageSrc="/tech/python.svg" text="Python" />
          <TechIcon imageSrc="/tech/django.svg" text="Django" />
          <TechIcon imageSrc="/tech/nextjs.svg" text="Next JS" />
          <TechIcon imageSrc="/tech/postgresql.svg" text="Postgre SQL" />
          <TechIcon imageSrc="/tech/html-5.svg" text="HTML 5" />
          <TechIcon imageSrc="/tech/css.svg" text="CSS 3" />
          <TechIcon imageSrc="/tech/selenium.svg" text="Selenium" />
        </div>
      </div>
    </section>
  );
}
