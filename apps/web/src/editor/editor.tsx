import { useState } from "react";
import { AppLayoutState } from "~src/app/layout";
import { Doc } from "~src/doc/type";
import { SettingsState } from "~src/settings/type";
import { EditorInput } from "./input/input";
import * as s from "./editor.module.css";
import { EditorStatus } from "./status/status";
import { useEditorTheme } from "./theme/theme";
import { EditorToolbar } from "./toolbar/toolbar";
import { EditorState } from "./type";

interface Props extends EditorState, AppLayoutState, SettingsState {}

const initialDoc: Doc = {
  handle: null,
  name: "Untitled",
  content: "",
};

export const Editor = (props: Props): JSX.Element => {
  const { editor, setEditor, settings, setSettings, layout, setLayout } = props;
  const [doc, setDoc] = useState<Doc>(initialDoc);

  useEditorTheme({ settings });

  return (
    <div className={s.container}>
      {editor !== null ? (
        <div className={s.toolbar}>
          <EditorToolbar
            {...{ layout, setLayout, settings, setSettings }}
            {...{ doc, setDoc, editor }}
          />
        </div>
      ) : null}
      <div className={s.input}>
        <EditorInput {...{ setEditor, editor, settings }} />
      </div>
      {editor !== null ? (
        <div className={s.status}>
          <EditorStatus {...{ editor, settings }} />
        </div>
      ) : null}
    </div>
  );
};
