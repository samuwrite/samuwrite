import { useRef, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";

import { Editor } from "../../editor/type";

interface Params {
  editor: Editor;
}
type Ref = React.RefObject<HTMLDivElement>;

const scrollPreview = (editor: Editor): void => {
  const [visibleRange] = editor.getVisibleRanges();
  const visibleStartLine = visibleRange.startLineNumber;

  const previewEl = document.querySelector(`[data-line="${visibleStartLine}"]`);
  previewEl?.scrollIntoView({
    block: visibleStartLine === 1 ? "center" : "start",
    behavior: "smooth",
  });
};

export const usePreviewScroll = (params: Params): Ref => {
  const { editor } = params;
  const contentRef = useRef<HTMLDivElement | null>(null);

  const listener: null | (() => void) = useMemo(() => {
    if (editor === null) return null;
    return debounce(() => scrollPreview(editor), 100);
  }, [editor]);

  useEffect(() => {
    if (editor === null || listener === null) return;
    const disposable = editor.onDidScrollChange(listener);
    return () => disposable.dispose();
  }, [editor, listener]);

  return contentRef;
};
