import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import GithubSlugger from "github-slugger";
import { formatDistanceToNow } from "date-fns";
import { writeFileSync } from "fs";
import algoliasearch from "algoliasearch";

/** @type {import('contentlayer/source-files').ComputedFields} */

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_KEY
);

function transformPostsToSearchObjects(post) {
  const transformed = {
    objectID: post.title,
    title: post.title,
    excerpt: post.description,
    slug: post._raw.sourceFileName.replace(/\.mdx$/, ""),
  };

  return [transformed];
}

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) =>
      doc._raw.sourceFileName
        // hello-world.mdx => hello-world
        .replace(/\.mdx$/, ""),
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readingTime: {
    type: "json",
    resolve: (doc) => readingTime(doc.body.raw),
  },
  age: {
    type: "json",
    resolve: (doc) => formatDistanceToNow(Date.parse(doc.published)),
  },
  splitKeywords: {
    type: "json",
    resolve: (doc) => doc.keywords.split(","),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger();
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level: flag.length,
            text: content,
            slug: "#" + (content ? slugger.slug(content) : undefined),
          };
        }
      );
      return headings;
    },
  },
  addToAlgolia: {
    type: "boolean",
    resolve: async (doc) => {
      if (doc.status != "draft") {
        try {
          const transformed = transformPostsToSearchObjects(doc);

          const index = client.initIndex(
            process.env.NEXT_PUBLIC_ALGOLIA_INDX_NAME
          );

          const algoliaResponse = await index.saveObjects(transformed);

          // check the output of the response in the console
          console.log(
            `🎉 Sucessfully added ${
              algoliaResponse.objectIDs.length
            } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
              "\n"
            )}`
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: { type: "string", required: true },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true,
    },
    keywords: { type: "string", required: true },
    featuredImage: { type: "string", required: false },
  },
  computedFields,
}));

function createTagCount(allDocs) {
  const tagCount = {};
  allDocs.forEach((file) => {
    if (file.keywords && file.status !== "draft") {
      file.keywords.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  writeFileSync("./app/tag-data.json", JSON.stringify(tagCount));
}

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      // rehypePrism,
      rehypeAccessibleEmojis,
      [
        rehypePrettyCode,
        {
          theme: "dark-plus",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            const nodeClass = node.properties.className;
            // console.log("Highlighted Line", {node})
            if (nodeClass && nodeClass.length > 0) {
              node.properties.className.push("line--highlighted");
            } else {
              node.properties.className = ["line--highlighted"];
            }
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
