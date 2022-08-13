import { ThreeBarsIcon } from "@primer/octicons-react";
import { FloatingPopover } from "../floating/popover";
import { ToolbarButton } from "./button/button";

export const ToolbarMenu = (): JSX.Element => {
  return (
    <FloatingPopover
      button={({ open }) => (
        <ToolbarButton Icon={ThreeBarsIcon} label="Menu" selected={open} />
      )}
      panel={<div>hello</div>}
    />
  );
};
