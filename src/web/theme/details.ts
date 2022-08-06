import { ThemeDetail } from "./type";

const THEME_DETAILS: Map<string, ThemeDetail> = new Map();

THEME_DETAILS.set("bushido", {
  name: "Bushido",
  scheme: "dark",
  colors: {
    bg: "#242933",
    main: "#ec4c56",
    caret: "#ec4c56",
    sub: "#596172",
    text: "#f6f0e9",
    error: "#ec4c56",
  },
});

THEME_DETAILS.set("paper", {
  name: "Paper",
  scheme: "light",
  colors: {
    bg: "#eeeeee",
    main: "#444444",
    caret: "#3B82F6",
    sub: "#b2b2b2",
    text: "#444444",
    error: "#d70000",
  },
});

THEME_DETAILS.set("high-contrast", {
  name: "High contrast",
  scheme: "high-contrast",
  colors: {
    bg: "#000000",
    main: "#1aebff",
    caret: "#ffffff",
    sub: "#1aebff",
    text: "#ffffff",
    error: "#e11845",
  },
});

export const DEFAULT_THEME_DETAIL: ThemeDetail = (() => {
  const detail = THEME_DETAILS.get("bushido");
  if (detail === undefined) throw Error("default theme is undefined");
  return detail;
})();

export { THEME_DETAILS };
