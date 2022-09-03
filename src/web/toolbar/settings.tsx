import { GearIcon } from "@primer/octicons-react";
import { useCallback, useState } from "react";
import { LayoutState } from "../layout/type";
import { Popover } from "../popover/popover";
import { SettingsPanel } from "../settings/panel";
import { SettingsState } from "../settings/type";
import { useShortcut } from "../shortcut/shortcut";
import { Tooltip } from "../tooltip/tooltip";
import { ToolbarButton } from "./button/button";

interface Props extends SettingsState, LayoutState {}

export const ToolbarSettings = (props: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const callback = useCallback(() => setOpen((open) => !open), []);
  useShortcut("$mod+,", callback);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Tooltip content="Settings" shortcut="⌘ ,">
        <Popover.Trigger asChild>
          <ToolbarButton Icon={GearIcon} label="Settings" selected={open} />
        </Popover.Trigger>
      </Tooltip>
      <Popover.Content>
        <SettingsPanel {...props} />
      </Popover.Content>
    </Popover.Root>
  );
};
