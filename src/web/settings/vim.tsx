import { SettingsSwitch } from "./switch/switch";
import { SettingsState } from "./type";

interface Props extends SettingsState {}

export const SettingsVim = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <SettingsSwitch
      label="Vim mode"
      checked={settings.vim}
      setChecked={(checked) => {
        setSettings((prev) => ({ ...prev, vim: checked }));
      }}
    />
  );
};
