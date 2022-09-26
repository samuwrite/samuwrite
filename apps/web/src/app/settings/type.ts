import { Dispatch, SetStateAction } from "react";
import { variants } from "@rose-pine/palette";
import { AppLayout } from "~src/app/layout";

export interface Settings {
  // app
  theme: keyof typeof variants;
  // editor
  vim: boolean;
  fontSize: number;
  wrapColumn: number;
  // preview
  preview: Exclude<AppLayout, "editor">;
  template: string;
}

export interface SettingsState {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
