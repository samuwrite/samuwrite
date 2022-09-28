import { initVimMode, VimMode } from "monaco-vim";
import { useEffect, useRef } from "react";
import { Settings } from "~src/settings/type";
import { getEditorContentWidth } from "../input/layout";
import { Editor } from "../type";
import * as s from "./status.css";

interface Props {
  editor: Editor;
  settings: Settings;
}

const mapKey = () => {
  VimMode.Vim.map("jj", "<Esc>", "insert");
  VimMode.Vim.map("jk", "<Esc>", "insert");
};

export const EditorStatus = (props: Props): JSX.Element => {
  const { editor, settings } = props;
  const statusRef = useRef<HTMLDivElement>(null);

  const { vim: settingsVim } = settings;
  useEffect(() => {
    if (settingsVim === false) return;

    const status = statusRef.current;
    if (status === null) throw Error("`status` is null");

    const vimMode = initVimMode(editor, status);
    mapKey();
    return () => vimMode.dispose();
  }, [editor, settingsVim, statusRef]);

  const width = getEditorContentWidth(settings);

  return <div className={s.container} ref={statusRef} style={{ width }} />;
};
