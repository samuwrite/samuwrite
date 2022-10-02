import { CSSProperties, RefObject } from "react";
import { Settings } from "~src/settings/type";
import { Editor } from "../type";
import * as s from "./input.css";

interface Props {
  inputRef: RefObject<HTMLDivElement>;
  settings: Settings;
}

export const EditorInput = (props: Props): JSX.Element => {
  const { inputRef, settings } = props;

  const style: CSSProperties = {
    "--editor-font-size": settings.fontSize,
    "--editor-wrap-column": settings.wrapColumn,
  } as CSSProperties;

  return (
    // Better putting "style" here to avoid messing with "input" (which is
    // managed by monaco)
    <div className={s.container} style={style}>
      <div className={s.input} ref={inputRef} />
    </div>
  );
};
