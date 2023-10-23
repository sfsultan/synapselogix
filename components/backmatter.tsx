"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface BackmatterProps {
  references: {
    _id: number,
    title: string,
    link: string
  }[]
}

export function Backmatter({ references }: BackmatterProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="">
        <h3 className="text-xl ">References</h3>
        <ul>
        {references.map((r) => (
          <li
            key={r._id}
            className=""
          >
            <a href={r.link}>{r.title}</a>
          </li>
        ))}
        </ul>
    </div>
  );
}
