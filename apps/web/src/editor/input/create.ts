import * as monaco from "monaco-editor";
import { RefObject, useEffect } from "react";
import { SAMPLE_TAILWIND } from "../../samples/tailwind";
import { Settings } from "../../settings/type";
import { EditorState } from "../type";

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
  fontFamily: "iA Writer Duo",
  fontLigatures: true,
  glyphMargin: false,
  hideCursorInOverviewRuler: true,
  language: "markdown",
  lineNumbers: "off",
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
  wordWrap: "bounded",
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
  containerRef: RefObject<HTMLDivElement>;
  settings: Settings;
}

export const useEditorCreate = (params: Params): void => {
  const { setEditor, containerRef, settings } = params;

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) throw Error("`container` is null");

    createEnv();
    const editor = monaco.editor.create(container, {
      ...OPTIONS,
      lineNumbers: settings.lines,
      value: SAMPLE_TAILWIND,
      // value: "",
    });
    setEditor(editor);

    return () => {
      setEditor(null);
      editor.dispose();
    };
  }, [setEditor, containerRef]);
};
