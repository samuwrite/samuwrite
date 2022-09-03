import { GearIcon } from "@primer/octicons-react";
import { LayoutState } from "../layout/type";
import { SettingsPanel } from "../settings/panel";
import { SettingsState } from "../settings/type";
import { ToolbarButton } from "./button/button";
import { Popover } from "../popover/popover";
import { useState } from "react";

interface Props extends SettingsState, LayoutState {}

export const ToolbarSettings = (props: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <ToolbarButton Icon={GearIcon} label="Settings" selected={open} />
      }
      content={<SettingsPanel {...props} />}
    />
  );
};
