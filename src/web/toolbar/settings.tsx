import { Popover } from "@headlessui/react";
import { GearIcon } from "@primer/octicons-react";
import { useState } from "react";
import { usePopper } from "react-popper";
import { LayoutState } from "../layout/type";
import { SettingsPanel } from "../settings/panel";
import { SettingsState } from "../settings/type";
import { ToolbarButton } from "./button/button";

interface Props extends SettingsState, LayoutState {}

export const ToolbarSettings = (props: Props): JSX.Element => {
  const [button, setButton] = useState<HTMLElement | null>(null);
  const [popover, setPopover] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(button, popover);

  return (
    <Popover>
      <ToolbarButton
        ref={setButton}
        as={Popover.Button}
        Icon={GearIcon}
        label="Settings"
      />
      <Popover.Panel
        ref={setPopover}
        style={styles.popper}
        {...attributes.popper}
      >
        <SettingsPanel {...props} />
      </Popover.Panel>
    </Popover>
  );
};
