import { useRef } from "react";
import { Settings } from "~src/settings/type";
import { EditorState } from "../type";
import { useEditorCreate } from "./create";
import "./font/font.css";
import * as s from "./input.css";
import "./input.global.css";
import { useEditorLayout } from "./layout";
import { useEditorTheme } from "./theme";
import { useEditorTypography } from "./typography";

interface Props extends EditorState {
  settings: Settings;
}

export const EditorInput = (props: Props): JSX.Element => {
  const { setEditor, editor, settings } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEditorTheme({ settings });
  useEditorCreate({ containerRef, setEditor });
  useEditorLayout({ containerRef, editor, settings });
  useEditorTypography({ editor, settings });

  return <div className={s.container} ref={containerRef} />;
};
