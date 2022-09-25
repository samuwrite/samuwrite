import rehypeDomStringify from "rehype-dom-stringify";
import rehypeExternalLinks from "rehype-external-links";
import { rehypeSourceMap } from "rehype-source-map";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Plugin, unified } from "unified";

const processor = unified()
  .use(remarkParse as Plugin)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeDomStringify as Plugin)
  .use(rehypeSourceMap)
  // Always open links in new tab to avoid navigating away from the editor
  // https://github.com/thien-do/samuwrite.com/issues/122
  .use(rehypeExternalLinks, { target: "_blank" });

export const getHtml = async (input: string): Promise<string> => {
  const file = await processor.process(input);
  const html = file.toString();
  return html;
};
