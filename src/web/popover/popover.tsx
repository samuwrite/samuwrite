import { Popover as LibPopover } from "@headlessui/react";
import { ReactNode } from "react";
import { useFloating } from "../floating/hook";
import { FloatingPanel } from "../floating/panel";

interface Props {
  button: (props: { open: boolean }) => JSX.Element;
  children: ReactNode;
}

export const Popover = (props: Props): JSX.Element => {
  const { button, children } = props;
  const float = useFloating();

  return (
    <LibPopover>
      <LibPopover.Button ref={float.reference} as="div">
        {button}
      </LibPopover.Button>
      <FloatingPanel Panel={LibPopover.Panel} float={float}>
        {children}
      </FloatingPanel>
    </LibPopover>
  );
};
