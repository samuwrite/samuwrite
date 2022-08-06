import { Popover } from "@headlessui/react";
import { LayoutState } from "../layout/type";
import { SettingsPreview } from "../settings/preview";
import { SettingsVim } from "../settings/vim";
import { SettingsState } from "./type";

interface Props extends SettingsState, LayoutState {}

export const SettingsPanel = (props: Props): JSX.Element => {
  return (
    <Popover.Panel>
      <SettingsPreview {...props} />
      <SettingsVim {...props} />
    </Popover.Panel>
  );
};
