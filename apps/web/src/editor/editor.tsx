import { useState } from "react";
import { Doc } from "~src/doc/type";
import { Settings } from "~src/settings/type";
import * as s from "./editor.css";
import "./font/font.css";
import { EditorInput } from "./input/input";
import "./monaco.css";
import { EditorState } from "./type";
import { EditorStatus } from "./vim/status";

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

  return (
    <div className={s.container}>
      <div className={s.toolbar}>Toolbar</div>
      <div className={s.input}>
        <EditorInput {...{ editor, setEditor, settings }} />
      </div>
      {editor !== null ? (
        <div className={s.status}>
          <EditorStatus {...{ editor, settings }} />
        </div>
      ) : null}
    </div>
  );
};
