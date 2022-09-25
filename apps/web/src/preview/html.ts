import { useEffect, useState } from "react";
import { getHtml } from "@samuwrite/markdown";
import { Editor } from "../editor/type";

interface Params {
  editor: Editor;
}

export const usePreviewHtml = (params: Params): string => {
  const { editor } = params;

  const [html, setHtml] = useState("");

  useEffect(() => {
    // Set initial value
    getHtml(editor.getValue()).then((text) => setHtml(text));

    // Listen for changes
    const handler = async () => {
      const markdown = editor.getValue();
      const html = await getHtml(markdown);
      setHtml(html);
    };
    const listeners = [
      editor.onDidChangeModelContent(handler),
      editor.onDidChangeModel(handler), // Open new file
    ];
    return () => listeners.forEach((l) => l.dispose());
  }, [editor]);

  return html;
};
