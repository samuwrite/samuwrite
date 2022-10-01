import { initVimMode, VimMode } from "monaco-vim";
import { RefObject, useEffect } from "react";
import { Settings } from "~src/settings/type";
import { Editor } from "./type";

interface Params {
  editor: Editor | null;
  settings: Settings;
  statusRef: RefObject<HTMLDivElement>;
}

const envDone = { current: false };

const ensureEnv = () => {
  if (envDone.current) return;
  VimMode.Vim.map("jj", "<Esc>", "insert");
  VimMode.Vim.map("jk", "<Esc>", "insert");
  envDone.current = true;
};

export const useEditorVim = (params: Params): void => {
  const { editor, settings, statusRef } = params;

  const { vim: settingsVim } = settings;
  useEffect(() => {
    if (settingsVim === false) return;
    if (editor === null) return;

    const status = statusRef.current;
    if (status === null) throw Error("`status` is null");

    ensureEnv();
    const vimMode = initVimMode(editor, status);
    return () => vimMode.dispose();
  }, [editor, settingsVim, statusRef]);
};
