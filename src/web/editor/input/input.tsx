import * as monaco from "monaco-editor";
import { useEffect, useRef } from "react";
import { SAMPLE_TAILWIND } from "../../samples/tailwind";
import { EditorState } from "../type";
import { createEditorEnv } from "./env";
import { EDITOR_CREATE_OPTIONS } from "./options";
import * as s from "./input.module.css";
import "./monaco.css";

interface Props extends Pick<EditorState, "setEditor"> {}

export const EditorInput = (props: Props): JSX.Element => {
  const { setEditor } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) throw Error("`container` is null");

    createEditorEnv();
    const editor = monaco.editor.create(container, {
      ...EDITOR_CREATE_OPTIONS,
      value: SAMPLE_TAILWIND,
    });
    setEditor(editor);

    return () => {
      setEditor(null);
      editor.dispose();
    };
  }, [setEditor]);

  return <div className={s.container} ref={containerRef} />;
};
