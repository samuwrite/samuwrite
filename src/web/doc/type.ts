import { Dispatch, SetStateAction } from "react";

export interface DocHandleMac {
  type: "mac";
  path: string;
}

export interface DocHandleWeb {
  type: "web";
  handle: FileSystemFileHandle;
}

export interface Doc {
  /**
   * This is NOT the current value of the editor. This is the content of the
   * document when we load it, or since last save.
   */
  content: string;
  /**
   * null: not saved
   */
  handle: null | DocHandleWeb | DocHandleMac;
}

export interface DocState {
  doc: Doc;
  setDoc: Dispatch<SetStateAction<Doc>>;
}
