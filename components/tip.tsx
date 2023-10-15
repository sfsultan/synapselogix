"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Info } from "lucide-react";

interface TipProps {
  title: string;
  intro: any;
  description: any;
  hasMore: boolean;
}

export function Tip({ title, intro, description, hasMore }: TipProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="my-10 pt-5 pb-7 space-y-2 border border-blue-400 dark:border-blue-900 rounded relative bg-gray-100 dark:bg-gray-800 shadow-lg"
    >
      <div className="flex items-center justify-between space-x-4 px-5 border rounded absolute py-2 -top-5 left-5 bg-blue-500">
        <h4 className="text-md font-semibold text-white">{title}</h4>
      </div>
      <div className="flex items-center justify-center rounded-full absolute py-2 h-10 w-10 -top-7 right-10 bg-blue-500 text-white">
        <Info className="" size={30}/>
      </div>
      <div className="mt-10 rounded-md px-4 py-3 font-mono text-sm">
        {intro}
      </div>

      <CollapsibleContent className="space-y-2">
        <div className="rounded-md px-4 py-3 font-mono text-sm">
          {description}
        </div>
      </CollapsibleContent>
      <CollapsibleTrigger asChild className="absolute right-5 bottom-2">
        <Button variant="ghost" size="sm" className="w-30 p-0 space-x-3">
          <span>{isOpen && "Show less"}{!isOpen && "Show more"}</span>
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
