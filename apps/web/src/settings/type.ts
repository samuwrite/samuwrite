import { variants } from "@rose-pine/palette";
import { Dispatch, SetStateAction } from "react";
import { Layout } from "~src/app/layout/type";

export interface Settings {
  // app
  theme: keyof typeof variants;
  // editor
  vim: boolean;
  fontSize: number;
  wrapColumn: number;
  // preview
  preview: Exclude<Layout, "editor">;
  template: string;
}

export interface SettingsState {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
