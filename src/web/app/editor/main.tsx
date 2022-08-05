import * as monaco from "monaco-editor";
import * as s from "./main.module.css";
import { useEffect, useRef } from "react";
import { EditorRef } from "./type";

// Setup workers
// https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-parcel
(self as any).MonacoEnvironment = {
  getWorkerUrl: function (_moduleId, _label) {
    return "/editor.worker.js";
  },
} as monaco.Environment;

interface Props {
  editorRef: EditorRef;
}

export const EditorMain = (props: Props): JSX.Element => {
  const { editorRef } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) throw Error("`container` is null");

    const editor = monaco.editor.create(container, {
      language: "markdown",
      value: "*hello* world",
    });
    editorRef.current = editor;

    return () => editor.dispose();
  }, [editorRef]);

  return <div className={s.container} ref={containerRef} />;
};
