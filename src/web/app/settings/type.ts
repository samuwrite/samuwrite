import { Dispatch, SetStateAction } from "react";

export interface Settings {
  preview: "full" | "split";
}

export interface SettingsState {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
