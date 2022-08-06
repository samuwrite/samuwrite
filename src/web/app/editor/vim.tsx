import { useEffect, useRef } from "react";
import { initVimMode } from "monaco-vim";
import { Settings } from "../settings/type";
import { Editor } from "./type";

interface Props {
  editor: Editor;
  settings: Settings;
}

export const EditorVim = (props: Props): JSX.Element => {
  const { editor, settings } = props;
  const statusRef = useRef<HTMLDivElement>(null);

  const { vim: settingsVim } = settings;
  useEffect(() => {
    if (settingsVim === false) return;

    const status = statusRef.current;
    if (status === null) throw Error("`status` is null");

    const vimMode = initVimMode(editor, status);
    return () => vimMode.dispose();
  }, [editor, settingsVim, statusRef]);

  return <div ref={statusRef} />;
};
