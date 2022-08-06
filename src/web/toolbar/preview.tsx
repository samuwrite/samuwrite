import { LogIcon } from "@primer/octicons-react";
import { Layout, LayoutState } from "../layout/type";
import { getLayoutFromPreview } from "../settings/preview";
import { Settings } from "../settings/type";
import { ToolbarButton } from "./button/button";

interface Props extends LayoutState {
  settings: Settings;
}

const getLayout = (props: Props): Layout => {
  const { layout, settings } = props;
  if (layout !== "editor") return "editor";
  return getLayoutFromPreview(settings.preview);
};

export const ToolbarPreview = (props: Props): JSX.Element => {
  const { layout, setLayout } = props;
  return (
    <ToolbarButton
      onClick={() => {
        setLayout(getLayout(props));
      }}
      Icon={LogIcon}
      label="Preview"
      selected={layout !== "editor"}
    />
  );
};
