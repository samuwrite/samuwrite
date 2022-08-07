import { Layout, LayoutState } from "../../layout/type";
import { SettingsRadioGroup } from "../radio/group";
import { Settings, SettingsState } from "../type";
import { PreviewIcon } from "./icon";

interface Props extends SettingsState, LayoutState {}

export const getLayoutFromPreview = (preview: Settings["preview"]): Layout => {
  return preview === "full" ? "preview" : "split";
};

export const SettingsPreview = (props: Props): JSX.Element => {
  const { setSettings, settings, layout, setLayout } = props;
  return (
    <SettingsRadioGroup<Settings["preview"]>
      value={settings.preview}
      onChange={(preview) => {
        setSettings((prev) => ({ ...prev, preview }));

        // Also update Layout if currently in preview mode
        if (layout === "editor") return;
        const next = getLayoutFromPreview(preview);
        if (layout === next) return;
        setLayout(next);
      }}
      options={[
        { label: "Split", value: "split", icon: <PreviewIcon mode="split" /> },
        { label: "Full", value: "full", icon: <PreviewIcon mode="full" /> },
      ]}
      label="Preview"
    />
  );
};
