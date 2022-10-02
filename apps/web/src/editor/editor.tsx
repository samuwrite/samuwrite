import { useRef, useState } from "react";
import { Doc } from "~src/doc/type";
import { Settings } from "~src/settings/type";
import * as s from "./editor.css";
import { EditorInput } from "./input/input";
import { EditorStatus } from "./status/status";
import { EditorState } from "./type";
import "./monaco.css";
import "./font/font.css";
import { useEditorInit } from "./init";
import { useEditorTheme } from "./theme";
import { useEditorTypography } from "./typography";
import { useEditorVim } from "./vim";
import { ToolbarState } from "~src/toolbar/type";
import { EditorToolbar } from "./toolbar/toolbar";

interface Props extends EditorState, ToolbarState {
  settings: Settings;
}

const initialDoc: Doc = {
  handle: null,
  name: "Untitled",
  content: "",
};

export const Editor = (props: Props): JSX.Element => {
  const { editor, setEditor, settings, setToolbar, toolbar } = props;

  const [doc, setDoc] = useState<Doc>(initialDoc);

  const inputRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEditorInit({ inputRef, setEditor });
  useEditorTheme({ settings });
  useEditorTypography({ editor, settings });
  useEditorVim({ editor, settings, statusRef });

  return (
    <div className={s.container}>
      <div className={s.toolbar}>
        <EditorToolbar {...{ setToolbar, toolbar }} />
      </div>
      <div className={s.input}>
        <EditorInput {...{ editor, inputRef, settings }} />
      </div>
      {editor !== null ? (
        <div className={s.status}>
          <EditorStatus {...{ statusRef }} />
        </div>
      ) : null}
    </div>
  );
};
