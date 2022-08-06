import * as monaco from "monaco-editor";
import * as s from "./main.module.css";
import { useEffect, useRef } from "react";
import { EditorState } from "./type";
import { EditorVim } from "./vim";
import { Settings } from "../settings/type";
import { SAMPLE_TAILWIND } from "../samples/tailwind";

// Setup workers
// https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-parcel
(self as any).MonacoEnvironment = {
  getWorkerUrl: function (_moduleId, _label) {
    return "/editor.worker.js";
  },
} as monaco.Environment;

interface Props extends EditorState {
  settings: Settings;
}

export const EditorMain = (props: Props): JSX.Element => {
  const { editor, setEditor, settings } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) throw Error("`container` is null");

    const instance = monaco.editor.create(container, {
      language: "markdown",
      value: SAMPLE_TAILWIND,
    });
    setEditor(instance);

    return () => instance.dispose();
  }, [setEditor]);

  return (
    <div>
      <div className={s.container} ref={containerRef} />
      {editor !== null ? (
        <EditorVim editor={editor} settings={settings} />
      ) : null}
    </div>
  );
};
