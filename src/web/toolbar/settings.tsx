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
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <ToolbarButton Icon={GearIcon} label="Settings" selected={open} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <SettingsPanel {...props} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
