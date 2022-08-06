import type * as monaco from "monaco-editor";
import { Dispatch, SetStateAction } from "react";

export type Editor = monaco.editor.IStandaloneCodeEditor;

// Use state instead of ref because some effects rely on the existence of an
// editor (e.g. see EditorVim)
export interface EditorState {
  editor: Editor | null;
  setEditor: Dispatch<SetStateAction<Editor | null>>;
}
