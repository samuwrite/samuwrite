import { useRef } from "react";
import { Settings } from "../../settings/type";
import { EditorState } from "../type";
import { useEditorCreate } from "./create";
import * as s from "./input.module.css";
import { useEditorLayout } from "./layout";
import "./input.css";
import { useEditorTypography } from "./typography";

interface Props extends EditorState {
  settings: Settings;
}

export enum EditorStoreName {
  Database = "monacoEditorDB",
  Object = "unsavedChanges",
  Key = "data",
}

export const StoreInterval = 2000;

export const EditorInput = (props: Props): JSX.Element => {
  const { setEditor, editor, settings } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEditorCreate({ containerRef, setEditor });
  useEditorLayout({ containerRef, editor, settings });
  useEditorTypography({ editor, settings });

  return <div className={s.container} ref={containerRef} />;
};
