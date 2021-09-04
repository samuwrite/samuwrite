import * as monaco from "monaco-editor";
import { getEditorLeftPadding } from "../layout";

type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions;

const EDITOR_STATIC_OPTIONS: EditorOptions = {
	value: "",
	language: "markdown",

	ariaLabel: "Main markdown editor",
	codeLens: false,
	contextmenu: false,
	copyWithSyntaxHighlighting: false,
	cursorBlinking: "smooth",
	cursorSmoothCaretAnimation: true,
	cursorSurroundingLines: 3,
	cursorWidth: 3,
	fontFamily: "iA Writer Duo",
	fontLigatures: true,
	fontWeight: "425",
	glyphMargin: false,
	disableMonospaceOptimizations: true,
	fontSize: 20,
	lineHeight: 40,
	lineNumbers: "off",
	minimap: { enabled: false },
	padding: { top: 150, bottom: 150 },
	quickSuggestions: false,
	roundedSelection: false,
	selectionHighlight: false,
	smoothScrolling: true,
	snippetSuggestions: "none",
	suggestOnTriggerCharacters: false,
	wordBasedSuggestions: false,
	wordWrap: "bounded",
	scrollBeyondLastLine: false,
	wordWrapColumn: 80,
	folding: false,
	occurrencesHighlight: false,
	renderLineHighlight: "none",
	hideCursorInOverviewRuler: true,
	overviewRulerBorder: false,
	scrollbar: {
		useShadows: false,
		horizontal: "hidden",
		verticalSliderSize: 5,
	},
};

export const getEditorOptions = (container: HTMLDivElement): EditorOptions => ({
	...EDITOR_STATIC_OPTIONS,
	lineDecorationsWidth: getEditorLeftPadding(container),
});
