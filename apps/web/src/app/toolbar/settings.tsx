import { GearIcon } from "@primer/octicons-react";
import { useCallback, useState } from "react";
import { Popover } from "~src/popover/popover";
import { SettingsFontSize } from "~src/settings/font-size";
import { SettingsPanel } from "~src/settings/panel";
import { SettingsTheme } from "~src/settings/theme/theme";
import { SettingsState } from "~src/settings/type";
import { SettingsVim } from "~src/settings/vim";
import { SettingsWrapColumn } from "~src/settings/wrap-column";
import { useShortcut } from "~src/shortcut/shortcut";
import { ToolbarButton } from "~src/toolbar/button/button";
import { Tooltip } from "~src/tooltip/tooltip";

interface Props extends SettingsState {}

export const EditorSettings = (props: Props): JSX.Element => {
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
        <SettingsPanel {...props}>
          {[SettingsTheme, SettingsVim, SettingsWrapColumn, SettingsFontSize]}
        </SettingsPanel>
      </Popover.Content>
    </Popover.Root>
  );
};
