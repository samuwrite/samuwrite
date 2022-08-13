import { Menu as LibMenu } from "@headlessui/react";
import { useFloating } from "./hook";
import { FloatingPanel } from "./panel";

interface Props {
  button: (props: { open: boolean }) => JSX.Element;
  panel: JSX.Element;
}

export const FloatingMenu = (props: Props): JSX.Element => {
  const { button, panel } = props;
  const float = useFloating();

  return (
    <LibMenu>
      <LibMenu.Button ref={float.reference} as="div">
        {button}
      </LibMenu.Button>
      <FloatingPanel Panel={LibMenu.Items} float={float}>
        {panel}
      </FloatingPanel>
    </LibMenu>
  );
};
