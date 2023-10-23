import { MetadataRoute } from "next";
import { APP_NAME, APP_URL } from "@/app-config";
import { allDocs, Doc } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  interface PostDataProps {
    url: string;
    lastModified?: string | Date | undefined;
    changeFrequency?: "yearly" | "always" | "hourly" | "daily" | "weekly" | "monthly" | "never" | undefined;
    priority: 1,
  }

  const postData:PostDataProps[] = allDocs.map((doc) => {
    return {
      url: APP_URL + "/" + doc.slug,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    };
  }) ?? [];

  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ... postData
  ];
}
