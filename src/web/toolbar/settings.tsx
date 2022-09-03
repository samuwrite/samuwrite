import { GearIcon } from "@primer/octicons-react";
import { LayoutState } from "../layout/type";
import { SettingsPanel } from "../settings/panel";
import { SettingsState } from "../settings/type";
import { ToolbarButton } from "./button/button";
// import { Popover } from "../popover/popover";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Scroll } from "../scroll/scroll";
import { Card } from "../card/card";

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
          <div className={Card.solid}>
            <Scroll.Root>
              <Scroll.Viewport>
                <SettingsPanel {...props} />
              </Scroll.Viewport>
              <Scroll.Track orientation="vertical">
                <Scroll.Thumb />
              </Scroll.Track>
            </Scroll.Root>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
