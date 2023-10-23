"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react";
import { cn } from "@/lib/utils"
import { Check } from "lucide-react";
import { FC } from 'react';
import Link from "next/link";
import { useSearchParams } from 'next/navigation'


interface TweetButtonProps {
  url: string
  tags: string
  title: string
}


export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet'
const TWITTER_HANDLE = 'PyPills'

export const getTwitterHref = ({ url, title, tags }: TweetButtonProps) => {
  const shareUrl = new URL(TWITTER_INTENT_URL)
  const search = new URLSearchParams({
    url,
    text: title,
    hashtags: tags,
    via: TWITTER_HANDLE,
  }).toString()

  shareUrl.search = search

  return shareUrl.href
}


export const TweetButton: FC<TweetButtonProps> = (props) => {
  const searchParams = useSearchParams()

  const path = searchParams.set
  
  return (
    <a className="border border-input dark:bg-red-900 dark:hover:bg-red-600 dark:hover:text-accent-foreground transition duration-150 hover:bg-red-200 h-9 rounded-md px-3 flex flex-row space-x-1 align-middle justify-center" target="_blank" href={getTwitterHref(props)}>
      <span className="my-auto">
      <svg data-testid="geist-icon" height="14" strokeLinejoin="round"  viewBox="0 0 16 16" width="14" aria-label=""><path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="currentColor"></path></svg>
      </span>
      <span className="my-auto">Tweet</span>
    </a>
  )
  
}