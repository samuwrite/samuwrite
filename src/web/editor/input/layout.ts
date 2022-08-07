import { RefObject, useEffect } from "react";
import { Settings } from "../../settings/type";
import { Editor } from "../type";

interface Params {
  editor: Editor | null;
  settings: Settings;
  containerRef: RefObject<HTMLDivElement>;
}

// lineDecorationsWidth is how we can achieve real center align (like iA
// Writer) and not the pseudo align (like VS Code)
// https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOptions.html#lineDecorationsWidth
const getLeftPad = (params: {
  container: HTMLDivElement;
  fontSize: Settings["fontSize"];
  wrapColumn: Settings["wrapColumn"];
}): number => {
  const { container, fontSize, wrapColumn } = params;

  // The ratio of font size over a character's width. This is a magic number
  // sepecific for our iA Writer Duo font
  const RATIO = 0.6;
  const content = fontSize * RATIO * wrapColumn;

  const free = container.clientWidth - content;
  const expected = Math.round(free / 2);
  const bounded = Math.max(expected, 48);

  return bounded;
};

export const useEditorLayout = (params: Params): void => {
  const { containerRef, editor, settings } = params;

  const { fontSize, wrapColumn } = settings;
  useEffect(() => {
    if (editor === null) return;

    const container = containerRef.current;
    if (container === null) throw Error("`container` is not defined");

    const observer = new ResizeObserver(() => {
      const pad = getLeftPad({ container, fontSize, wrapColumn });
      editor.updateOptions({ lineDecorationsWidth: pad });
      editor.layout();
    });

    observer.observe(container);
    return () => void observer.unobserve(container);
  }, [containerRef, editor, fontSize, wrapColumn]);
};
