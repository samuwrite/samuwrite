import { useEffect, useRef } from "react";
import { initVimMode, VimMode } from "monaco-vim";
import { Settings } from "../../settings/type";
import { Editor } from "../type";
import * as s from "./status.module.css";
import { getEditorContentWidth } from "../input/layout";

interface Props {
  editor: Editor;
  settings: Settings;
}

const envDone = { current: false };

const createEnv = () => {
  if (envDone.current) return;
  VimMode.Vim.map("jj", "<Esc>", "insert");
  VimMode.Vim.map("jk", "<Esc>", "insert");
  envDone.current = true;
};

export const EditorStatus = (props: Props): JSX.Element => {
  const { editor, settings } = props;
  const statusRef = useRef<HTMLDivElement>(null);

  const { vim: settingsVim } = settings;
  useEffect(() => {
    if (settingsVim === false) return;
    createEnv();

    const status = statusRef.current;
    if (status === null) throw Error("`status` is null");

    const vimMode = initVimMode(editor, status);
    return () => vimMode.dispose();
  }, [editor, settingsVim, statusRef]);

  const width = getEditorContentWidth(settings);

  return <div className={s.container} ref={statusRef} style={{ width }} />;
};
