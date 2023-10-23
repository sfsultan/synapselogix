"use client";

import * as React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import Image from "next/image";

interface TechIconProps {
  imageSrc: string;
  text: string;
}

export function TechIcon({ imageSrc, text }: TechIconProps) {
  return (
    <TooltipProvider delayDuration={200}>
        <Tooltip>
            <TooltipTrigger>
            <Image
                src={imageSrc}
                width={50}
                height={50}
                alt={text + " Logo"}
                loading="lazy"
                className="bg-zinc-200 dark:hover:bg-zinc-500 hover:bg-zinc-300 p-2 rounded-md transition duration-150 cursor-auto"
            />
            </TooltipTrigger>
            <TooltipContent className="bg-zinc-800 text-zinc-200 text-md border-zinc-900">
            <p >{text}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  );
}
