import { useEffect } from "react";
import { Settings } from "../../settings/type";
import { Editor } from "../type";
import { EDITOR_TYPOGRAPHY_DETAILS } from "./details";

interface Params {
  editor: Editor | null;
  settings: Settings;
}

export const useEditorTypography = (params: Params): void => {
  const { editor, settings } = params;

  const { size } = settings;
  useEffect(() => {
    if (editor === null) return;

    const detail =
      EDITOR_TYPOGRAPHY_DETAILS.get(size) ??
      EDITOR_TYPOGRAPHY_DETAILS.get("XL")!;

    editor.updateOptions({
      fontSize: detail.fontSize,
      lineHeight: Math.round(detail.fontSize * detail.lineHeight),
      fontWeight: detail.weight.toString(),
      // @TODO: Calculate letter spacing using metrics.spacing
      // letterSpacing:
    });
  }, [editor, size]);
};
