import { Dispatch, SetStateAction } from "react";
import { variants } from "@rose-pine/palette";

export interface Settings {
  // app
  theme: keyof typeof variants;
  // editor
  vim: boolean;
  fontSize: number;
  wrapColumn: number;
  // preview
  preview: "full" | "split";
  template: string;
}

export interface SettingsState {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
