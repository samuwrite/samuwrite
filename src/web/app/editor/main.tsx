import * as monaco from "monaco-editor";
import * as s from "./main.module.css";
import { useEffect, useRef } from "react";

// Setup workers
// https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-parcel
(self as any).MonacoEnvironment = {
  getWorkerUrl: function (_moduleId, _label) {
    return "/editor.worker.js";
  },
} as monaco.Environment;

export const EditorMain = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (container === null) throw Error("`container` is null");
    const editor = monaco.editor.create(container, {
      language: "markdown",
    });

    return () => {
      editor.dispose();
    };
  }, []);

  return <div className={s.container} ref={ref} />;
};
