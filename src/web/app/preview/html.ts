import { useEffect, useState } from "react";
import rehypeDomStringify from "rehype-dom-stringify";
import { rehypeSourceMap } from "rehype-source-map";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Plugin, unified } from "unified";
import { Editor, EditorRef } from "../editor/type";

const processor = unified()
  .use(remarkParse as Plugin)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeDomStringify as Plugin)
  .use(rehypeSourceMap);

interface Params {
  editorRef: EditorRef;
}

const getHtml = async (editor: Editor): Promise<string> => {
  const file = await processor.process(editor.getValue());
  const html = file.toString();
  return html;
};

export const usePreviewHtml = (params: Params): string => {
  const { editorRef } = params;

  const [html, setHtml] = useState("");

  useEffect(() => {
    const editor = editorRef.current;
    if (editor === null) return;

    // Set initial value
    getHtml(editor).then((text) => setHtml(text));

    // Listen for changes
    const handler = async () => setHtml(await getHtml(editor));
    const listeners = [
      editor.onDidChangeModelContent(handler),
      editor.onDidChangeModel(handler), // Open new file
    ];
    return () => listeners.forEach((l) => l.dispose());
  }, [editorRef]);

  return html;
};
