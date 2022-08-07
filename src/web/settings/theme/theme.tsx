import { SettingsRadioGroup } from "../radio/group";
import { Settings, SettingsState } from "../type";
import { ThemeIcon } from "./icon";

interface Props extends SettingsState {}

export const SettingsTheme = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <SettingsRadioGroup<Settings["theme"]>
      value={settings.theme}
      onChange={(theme) => setSettings((prev) => ({ ...prev, theme }))}
      options={[
        { label: "Main", value: "main", icon: <ThemeIcon theme="main" /> },
        { label: "Moon", value: "moon", icon: <ThemeIcon theme="moon" /> },
        { label: "Dawn", value: "dawn", icon: <ThemeIcon theme="dawn" /> },
      ]}
      label="Theme"
    />
  );
};
