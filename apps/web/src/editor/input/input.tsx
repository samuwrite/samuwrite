import { CSSProperties, RefObject, useEffect, useState } from "react";
import { Settings } from "~src/settings/type";
import { Editor } from "../type";
import * as s from "./input.css";

interface Props {
  inputRef: RefObject<HTMLDivElement>;
  settings: Settings;
  editor: Editor | null;
}

export const EditorInput = (props: Props): JSX.Element => {
  const { inputRef, settings, editor } = props;

  const [margin, setMargin] = useState<number>(50);

  // Set margin value by querying DOM
  useEffect(() => {
    // Editor is not ready
    if (editor === null) return;

    window.setTimeout(() => {
      const input = inputRef.current;
      const element = input?.querySelector(".monaco-editor .margin") ?? null;
      if (element === null) throw Error("Cannot get editor margin element");

      const margin = element.clientWidth;
      setMargin(margin);
    }, 1000);
  }, [inputRef, editor]);

  const style: CSSProperties = {
    "--editor-font-size": settings.fontSize,
    "--editor-wrap-column": settings.wrapColumn,
    "--editor-margin": margin,
  } as CSSProperties;

  return (
    // Better putting "style" here to avoid messing with "input" (which is
    // managed by monaco)
    <div className={s.container} style={style}>
      <div className={s.input} ref={inputRef} />
    </div>
  );
};
