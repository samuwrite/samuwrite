import { Dispatch, SetStateAction } from "react";

export interface Doc {
  /**
   * null: Not saved yet
   */
  path: string | null;
  /**
   * This is like path but for the Web Version.
   * File Access System API is still experimental. 
   * Typescript doesn't yet support it. But here's the doc: https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
   */
   fileHandle?: any,
  /**
   * This is NOT the current value of the editor. This is the content of the
   * document when we load it, or since last save.
   */
  content: string;
}

export interface DocState {
  doc: Doc;
  setDoc: Dispatch<SetStateAction<Doc>>;
}
