import type * as monaco from "monaco-editor";
import { MutableRefObject } from "react";

export type Editor = monaco.editor.IStandaloneCodeEditor;

export type EditorRef = MutableRefObject<Editor | null>;

export type EditorModel = monaco.editor.ITextModel;

export type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions;
