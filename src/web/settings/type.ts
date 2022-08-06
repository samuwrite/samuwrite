import { Dispatch, SetStateAction } from "react";

export interface Settings {
  preview: "full" | "split";
  vim: boolean;
  theme: string;
}

export interface SettingsState {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
