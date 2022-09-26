import { SettingsRadioGroup } from "~src/settings/radio/group";
import { Settings, SettingsState } from "../type";
import { PreviewIcon } from "./icon";

interface Props extends SettingsState {}

export const SettingsPreview = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <SettingsRadioGroup
      value={settings.preview}
      onValueChange={(value) => {
        const preview = value as Settings["preview"];
        setSettings((prev) => ({ ...prev, preview }));
      }}
      options={[
        { label: "Split", value: "split", icon: <PreviewIcon mode="split" /> },
        { label: "Full", value: "full", icon: <PreviewIcon mode="preview" /> },
      ]}
      label="Preview"
    />
  );
};
