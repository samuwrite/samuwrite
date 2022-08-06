import { SettingsState } from "./type";
import { Switch } from "@headlessui/react";

interface Props extends SettingsState {}

export const SettingsVim = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <Switch.Group>
      <Switch.Label>Vim mode</Switch.Label>
      <Switch
        checked={settings.vim}
        onChange={(checked) => {
          setSettings((prev) => ({ ...prev, vim: checked }));
        }}
      >
        <span>{settings.vim ? "yes" : "no"}</span>
      </Switch>
    </Switch.Group>
  );
};
