import { Dispatch, SetStateAction } from "react";
import { variants } from "@rose-pine/palette";

export interface Settings {
  preview: "full" | "split";
  vim: boolean;
  theme: keyof typeof variants;
  fontSize: number;
  wrapColumn: number;
  template: string;
}

export interface SettingsState {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
