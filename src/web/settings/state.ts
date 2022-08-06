import { useEffect, useState } from "react";
import { Settings, SettingsState } from "./type";

const fallback: Settings = {
  preview: "split",
  vim: false,
  theme: "moon",
  size: "XL",
};

export const useSettingsState = (): SettingsState => {
  const [settings, setSettings] = useState<Settings>(() => {
    const stickyValue = window.localStorage.getItem("settings");
    if (stickyValue === null) return fallback;
    return { ...fallback, ...JSON.parse(stickyValue) };
  });

  useEffect(() => {
    window.localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return { settings, setSettings };
};
