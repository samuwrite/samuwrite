import { useEffect, useState } from "react";
import rehypeDomStringify from "rehype-dom-stringify";
import { rehypeSourceMap } from "rehype-source-map";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Plugin, unified } from "unified";
import { Editor } from "../editor/type";

const processor = unified()
  .use(remarkParse as Plugin)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeDomStringify as Plugin)
  .use(rehypeSourceMap)
  // Always open links in new tab to avoid navigating away from the editor
  // https://github.com/thien-do/samuwrite.com/issues/122
  .use(rehypeExternalLinks, { target: "_blank" });
interface Params {
  editor: Editor;
}

const getHtml = async (editor: Editor): Promise<string> => {
  const file = await processor.process(editor.getValue());
  const html = file.toString();
  return html;
};

export const usePreviewHtml = (params: Params): string => {
  const { editor } = params;

  const [html, setHtml] = useState("");

  useEffect(() => {
    // Set initial value
    getHtml(editor).then((text) => setHtml(text));

    // Listen for changes
    const handler = async () => setHtml(await getHtml(editor));
    const listeners = [
      editor.onDidChangeModelContent(handler),
      editor.onDidChangeModel(handler), // Open new file
    ];
    return () => listeners.forEach((l) => l.dispose());
  }, [editor]);

  return html;
};
