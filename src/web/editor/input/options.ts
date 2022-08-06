import * as monaco from "monaco-editor";

// Heads-up! Typography options (such as fontSize) are dynamic, not static.
// They are handled at run-time based on settings
export const EDITOR_CREATE_OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions =
  {
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
    padding: { top: 96, bottom: 150 },
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
    wordWrapColumn: 64,
    scrollbar: {
      useShadows: false,
      horizontal: "hidden",
      // This creates a 8px scrollbar. See editor.global.css
      verticalSliderSize: 16,
      verticalScrollbarSize: 16,
    },
  };
