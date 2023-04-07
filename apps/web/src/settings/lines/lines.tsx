import { Editor } from "../../editor/type";
import { SettingsRadioGroup } from "../radio/group";
import { Settings, SettingsState } from "../type";

interface Props extends SettingsState {
  editor: Editor;
}

export const SettingsLines = (props: Props): JSX.Element => {
  const { settings, setSettings, editor } = props;
  return (
    <SettingsRadioGroup
      label="Lines"
      options={[
        { label: "Disabled", value: "off", icon: <></> },
        { label: "Normal", value: "on", icon: <></> },
        { label: "Relative", value: "relative", icon: <></> },
      ]}
      value={settings.lines}
      onValueChange={(value) => {
        const lines = value as Settings["lines"];
        setSettings((prev) => ({ ...prev, lines }));

        editor.updateOptions({ lineNumbers: lines });
      }}
    />
  );
};
