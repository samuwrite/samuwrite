import { shift, useFloating } from "@floating-ui/react-dom";
import { Popover } from "@headlessui/react";
import { GearIcon } from "@primer/octicons-react";
import { Fragment } from "react";
import { LayoutState } from "../../layout/type";
import { outline } from "../../outline/outline";
import { SettingsPanel } from "../../settings/panel";
import { SettingsState } from "../../settings/type";
import { ToolbarButton } from "./../button/button";

interface Props extends SettingsState, LayoutState {}

export const ToolbarSettings = (props: Props): JSX.Element => {
  const float = useFloating({ middleware: [shift()] });

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button ref={float.reference} as="div">
            <ToolbarButton Icon={GearIcon} label="Settings" selected={open} />
          </Popover.Button>
          <Popover.Panel
            ref={float.floating}
            style={{
              position: float.strategy,
              top: float.y ?? 0,
              left: float.x ?? 0,
            }}
          >
            <SettingsPanel {...props} />
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
