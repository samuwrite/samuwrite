import { editor } from "monaco-editor";
import { useEffect } from "react";
import { Settings } from "../../settings/type";
import themeMain from "./themes/rose-pine-color-theme.json";
import themeMoon from "./themes/rose-pine-moon-color-theme.json";
import themeDawn from "./themes/rose-pine-dawn-color-theme.json";
import { variants } from "@rose-pine/palette";

// Heads-up: these infer types are very complicated
type VscodeTheme = typeof themeMain | typeof themeMoon | typeof themeDawn;
type VscodeToken = VscodeTheme["tokenColors"][number];

const VSCODE_THEMES: Record<Settings["theme"], VscodeTheme> = {
  dawn: themeDawn,
  main: themeMain,
  moon: themeMoon,
};

type MonacoToken = editor.ITokenThemeRule;
type MonacoTheme = editor.IStandaloneThemeData;

const toMonacoTokens = (vscode: VscodeToken): MonacoToken[] => {
  const scope = Array.isArray(vscode.scope) ? vscode.scope : [vscode.scope];
  const rules = scope.map((scope) => {
    const monaco: MonacoToken = { token: scope, ...vscode.settings };
    return monaco;
  });
  return rules;
};

const getMonacoTheme = (params: {
  vscode: VscodeTheme;
  variant: typeof variants["dawn"];
}): MonacoTheme => {
  const { variant, vscode } = params;

  const theme: MonacoTheme = {
    base: vscode.type === "dark" ? "vs-dark" : "vs",
    colors: {
      ...vscode.colors,
      "editorCursor.foreground": variant.rose.hex,
    },
    inherit: false,
    rules: vscode.tokenColors.flatMap(toMonacoTokens),
  };

  return theme;
};

interface Params {
  settings: Settings;
}

export const useEditorTheme = (params: Params): void => {
  const { theme } = params.settings;

  useEffect(() => {
    const vscode = VSCODE_THEMES[theme];
    const variant = variants[theme];
    editor.defineTheme("custom", getMonacoTheme({ vscode, variant }));
    editor.setTheme("custom");
  }, [theme]);
};
