import { Popover } from "@headlessui/react";
import { GearIcon } from "@primer/octicons-react";
import { LayoutState } from "../layout/type";
import { SettingsPanel } from "../settings/panel";
import { SettingsState } from "../settings/type";
import { ToolbarButton } from "./button/button";

interface Props extends SettingsState, LayoutState {}

export const ToolbarSettings = (props: Props): JSX.Element => {
  return (
    <Popover>
      <ToolbarButton as={Popover.Button} Icon={GearIcon} label="Settings" />
      <SettingsPanel {...props} />
    </Popover>
  );
};
