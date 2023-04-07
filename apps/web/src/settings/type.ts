import { Dispatch, SetStateAction } from "react";
import { variants } from "@rose-pine/palette";

export interface Settings {
  preview: "full" | "split";
  vim: boolean;
  theme: keyof typeof variants;
  fontSize: number;
  wrapColumn: number;
  template: string;
  lines: "on" | "off" | "relative";
}

export interface SettingsState {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
