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
import { useEditorTypography } from "./font/typography";
import { useEditorVim } from "./vim";

interface Props extends EditorState {
  settings: Settings;
}

const initialDoc: Doc = {
  handle: null,
  name: "Untitled",
  content: "",
};

export const Editor = (props: Props): JSX.Element => {
  const { editor, setEditor, settings } = props;

  const [doc, setDoc] = useState<Doc>(initialDoc);

  const inputRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEditorInit({ inputRef, setEditor });
  useEditorTheme({ settings });
  useEditorTypography({ editor, settings });
  useEditorVim({ editor, settings, statusRef });

  return (
    <div className={s.container}>
      <div className={s.toolbar}>Toolbar</div>
      <div className={s.input}>
        <EditorInput inputRef={inputRef} settings={settings} />
      </div>
      {editor !== null ? (
        <div className={s.status}>
          <EditorStatus statusRef={statusRef} />
        </div>
      ) : null}
    </div>
  );
};
