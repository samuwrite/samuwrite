import { Settings } from "../settings/type";
import { EditorInput } from "./input/input";
import * as s from "./main.module.css";
import { EditorState } from "./type";
import { useEditorTypography } from "./typography/effect";
import { EditorVim } from "./vim";

interface Props extends EditorState {
  settings: Settings;
}

export const EditorMain = (props: Props): JSX.Element => {
  const { editor, setEditor, settings } = props;

  useEditorTypography({ editor, settings });

  return (
    <div className={s.container}>
      <div className={s.input}>
        <EditorInput setEditor={setEditor} />
      </div>
      {editor !== null ? (
        <div className={s.status}>
          <EditorVim editor={editor} settings={settings} />
        </div>
      ) : null}
    </div>
  );
};
