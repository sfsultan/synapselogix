import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import { s } from "hastscript";
import GithubSlugger from "github-slugger";
import { formatDistanceToNow } from 'date-fns'

/** @type {import('contentlayer/source-files').ComputedFields} */

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
    resolve: (doc) => formatDistanceToNow( Date.parse(doc.published) ),
  },
  splitKeywords: {
    type: "json",
    resolve: (doc) => doc.keywords.split(','),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger()
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level: flag.length,
            text: content,
            slug: "#" + content ? slugger.slug(content) : undefined
          };
        }
      );
      return headings;
    },
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
    keywords: { type: "string", required: false },
  },
  computedFields,
}));

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
          theme: "material-theme-ocean",
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
