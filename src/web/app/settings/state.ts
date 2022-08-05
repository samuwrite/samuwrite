import { useStickyState } from "../../lib/state/sticky";
import { Settings, SettingsState } from "./type";

const initial: Settings = {
  preview: "split",
};

export const useSettingsState = (): SettingsState => {
  const [settings, setSettings] = useStickyState<Settings>(initial, "settings");
  return { setSettings, settings };
};
