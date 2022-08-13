import { GearIcon } from "@primer/octicons-react";
import { FloatingPopover } from "../floating/popover";
import { LayoutState } from "../layout/type";
import { SettingsPanel } from "../settings/panel";
import { SettingsState } from "../settings/type";
import { ToolbarButton } from "./button/button";

interface Props extends SettingsState, LayoutState {}

export const ToolbarSettings = (props: Props): JSX.Element => {
  return (
    <FloatingPopover
      button={({ open }) => (
        <ToolbarButton Icon={GearIcon} label="Settings" selected={open} />
      )}
      panel={<SettingsPanel {...props} />}
    />
  );
};
