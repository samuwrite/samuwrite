import { Popover } from "@headlessui/react";
import { LayoutState } from "../layout/type";
import { SettingsPreview } from "./preview";
import { SettingsState } from "./type";

interface Props extends SettingsState, LayoutState {}

const Panel = (props: Props): JSX.Element => {
  return (
    <Popover.Panel>
      <SettingsPreview {...props} />
    </Popover.Panel>
  );
};

export const SettingsPopover = (props: Props): JSX.Element => {
  return (
    <Popover>
      <Popover.Button>Settings</Popover.Button>
      <Panel {...props} />
    </Popover>
  );
};
