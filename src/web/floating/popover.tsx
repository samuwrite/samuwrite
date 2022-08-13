import { Popover } from "@headlessui/react";
import { useFloating } from "../floating/hook";
import { FloatingPanel } from "../floating/panel";

interface Props {
  button: (props: { open: boolean }) => JSX.Element;
  panel: JSX.Element;
}

export const FloatingPopover = (props: Props): JSX.Element => {
  const { button, panel } = props;
  const float = useFloating();

  return (
    <Popover>
      <Popover.Button ref={float.reference} as="div">
        {button}
      </Popover.Button>
      <FloatingPanel Panel={Popover.Panel} float={float}>
        {panel}
      </FloatingPanel>
    </Popover>
  );
};
