"use client"

import dynamic from 'next/dynamic';
import React from 'react';
import { APP_URL } from "app-config";
import { useTheme } from "next-themes";

interface DisqusCommentsProps {
    post: any
}

// Dynamically import `DiscussionEmbed` on the client-side only
const DiscussionEmbed = dynamic(
    () => import('disqus-react').then((mod) => mod.DiscussionEmbed),
    { ssr: false }
)

export default function DisqusComments({post, ...props}:DisqusCommentsProps) {
    const { theme } = useTheme(); 

    const disqusConfig = {
        url: APP_URL + post.slug,
        identifier: post._id,
        title: post.title
      }
    return <>
        <DiscussionEmbed
            key={theme}
            shortname="synapselogix"
            config={disqusConfig}
        />
    </>
}