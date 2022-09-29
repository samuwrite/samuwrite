import { useRef } from "react";
import { Settings } from "~src/settings/type";
import { EditorState } from "../type";
import "./font/font.css";
import { useEditorInit } from "./init";
import * as s from "./input.css";
import { useEditorLayout } from "./layout";
import "./monaco.css";
import { useEditorTheme } from "./theme";
import { useEditorTypography } from "./typography";

interface Props extends EditorState {
  settings: Settings;
}

export const EditorInput = (props: Props): JSX.Element => {
  const { editor, setEditor, settings } = props;

  const inputRef = useRef<HTMLDivElement>(null);

  useEditorInit({ inputRef, setEditor });
  useEditorTheme({ settings });
  useEditorLayout({ inputRef, editor, settings });
  useEditorTypography({ editor, settings });

  return <div className={s.container} ref={inputRef} />;
};
