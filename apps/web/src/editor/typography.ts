import { useEffect } from "react";
import { Settings } from "~src/settings/type";
import { Editor } from "~src/editor/type";

// These properties are calculated based on font size
interface Options {
  lineHeight: number;
  letterSpacing: number;
  fontWeight: number;
}

// fontSize, lineHeight, spacing, weight
const OPTION_ENTRIES: [number, Options][] = [
  [11, 1.9, 42, 490],
  [12, 1.89, 38, 482],
  [13, 1.89, 34, 475],
  [14, 1.88, 28, 470],
  [15, 1.87, 24, 465],
  [16, 1.86, 22, 460],
  [18, 1.85, 20, 455],
  [20, 1.83, 20, 450],
  [24, 1.79, 20, 445],
  [28, 1.75, 19, 440],
  [32, 1.71, 18, 435],
  [36, 1.67, 17, 430],
  [42, 1.61, 16, 425],
  [48, 1.55, 15, 425],
  [54, 1.49, 14, 425],
  [60, 1.43, 13, 425],
  [72, 1.38, 12, 425],
].map((values) => {
  const [fontSize, lineHeight, letterSpacing, fontWeight] = values;
  const detail: Options = { lineHeight, letterSpacing, fontWeight };
  return [fontSize, detail];
});

const OPTIONS: Map<number, Options> = new Map(OPTION_ENTRIES);

const OPTION_FALLBACK = (() => {
  const fallback = OPTIONS.get(20);
  if (fallback === undefined) throw Error("`fallback` is undefined");
  return fallback;
})();

const getOptions = (fontSize: number): Options => {
  return OPTIONS.get(fontSize) ?? OPTION_FALLBACK;
};

interface Params {
  editor: Editor | null;
  settings: Settings;
}

export const useEditorTypography = (params: Params): void => {
  const { editor, settings } = params;

  const { fontSize, wrapColumn } = settings;
  useEffect(() => {
    if (editor === null) return;

    const { fontWeight, letterSpacing, lineHeight } = getOptions(fontSize);

    editor.updateOptions({
      fontFamily: "iA Writer Duo", // Static for now
      fontSize,
      lineHeight: Math.round(fontSize * lineHeight),
      fontWeight: fontWeight.toString(),
      // iA Writer uses variable font config to change spacing so we can't
      // really mimic it
      letterSpacing: letterSpacing / 100,
      wordWrapColumn: wrapColumn,
    });
  }, [editor, fontSize, wrapColumn]);
};
