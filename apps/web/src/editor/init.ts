import * as monaco from "monaco-editor";
import { RefObject, useEffect } from "react";
import { EditorState } from "./type";
import { SAMPLE_TAILWIND } from "./samples/tailwind";

const envDone = { current: false };

const createEnv = (): void => {
  if (envDone.current === true) return;

  // https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-parcel
  window.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, _label) {
      return "./editor.worker.js";
    },
  };

  // https://github.com/microsoft/monaco-editor/issues/392
  document.fonts.ready.then(() => {
    monaco.editor.remeasureFonts();
  });

  envDone.current = true;
};

const OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
  ariaLabel: "Main markdown editor",
  codeLens: false,
  contextmenu: false,
  copyWithSyntaxHighlighting: false,
  cursorBlinking: "smooth",
  cursorSmoothCaretAnimation: true,
  cursorSurroundingLines: 3,
  cursorWidth: 3,
  disableMonospaceOptimizations: true,
  folding: false,
  fontLigatures: true,
  glyphMargin: false,
  hideCursorInOverviewRuler: true,
  language: "markdown",
  lineNumbers: "relative",
  minimap: { enabled: false },
  occurrencesHighlight: false,
  overviewRulerBorder: false,
  padding: { top: 96, bottom: 96 },
  quickSuggestions: false,
  renderLineHighlight: "none",
  roundedSelection: false,
  scrollBeyondLastLine: false,
  selectionHighlight: false,
  smoothScrolling: true,
  snippetSuggestions: "none",
  suggestOnTriggerCharacters: false,
  value: "",
  wordBasedSuggestions: false,
  // Don't rely on wordwrap column (i.e. "bounded") in order to manage width
  // and align center with CSS (see editor/layout)
  wordWrap: "on",
  scrollbar: {
    useShadows: false,
    horizontal: "hidden",
    // This creates a 8px scrollbar. See editor.global.css
    verticalSliderSize: 16,
    verticalScrollbarSize: 16,
  },
};

interface Params {
  setEditor: EditorState["setEditor"];
  inputRef: RefObject<HTMLDivElement>;
}

export const useEditorInit = (params: Params): void => {
  const { setEditor, inputRef } = params;

  useEffect(() => {
    const container = inputRef.current;
    if (container === null) throw Error("`container` is null");

    createEnv();
    const editor = monaco.editor.create(container, {
      ...OPTIONS,
      value: SAMPLE_TAILWIND,
      // value: "",
    });
    setEditor(editor);

    return () => {
      setEditor(null);
      editor.dispose();
    };
  }, [setEditor, inputRef]);
};
