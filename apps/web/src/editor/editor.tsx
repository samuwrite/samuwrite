import { useState } from "react";
import { Doc } from "~src/doc/type";
import { Settings } from "~src/settings/type";
import * as s from "./editor.module.css";
import { EditorInput } from "./input/input";
import { EditorStatus } from "./status/status";
import { useEditorTheme } from "./theme/theme";
import { EditorState } from "./type";

interface Props extends EditorState {
  settings: Settings;
}

export const Editor = (props: Props): JSX.Element => {
  const { editor, setEditor, settings } = props;

  useEditorTheme({ settings });

  return (
    <div className={s.container}>
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
