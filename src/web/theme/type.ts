export interface ThemeColors {
  bg: string;
  main: string;
  caret: string;
  sub: string;
  text: string;
  error: string;
}

export interface ThemeDetail {
  name: string;
  scheme: "light" | "dark" | "high-contrast";
  colors: ThemeColors;
}
