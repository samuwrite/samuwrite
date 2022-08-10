import { shift, useFloating } from "@floating-ui/react-dom";
import { Popover } from "@headlessui/react";
import { GearIcon } from "@primer/octicons-react";
import { LayoutState } from "../../layout/type";
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
          <ToolbarButton
            ref={float.reference}
            as={Popover.Button}
            Icon={GearIcon}
            label="Settings"
            selected={open}
          />
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
