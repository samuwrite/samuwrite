import { Menu as LibMenu } from "@headlessui/react";
import { ReactNode } from "react";
import { useFloating } from "../floating/hook";
import { FloatingPanel } from "../floating/panel";
import * as s from "./menu.module.css";

interface Props {
  button: (props: { open: boolean }) => JSX.Element;
  children: ReactNode;
}

export const Menu = (props: Props): JSX.Element => {
  const { button, children } = props;
  const float = useFloating();

  return (
    <LibMenu>
      <LibMenu.Button ref={float.reference} as="div">
        {button}
      </LibMenu.Button>
      <div className={s.wrapper}>
        <FloatingPanel Panel={LibMenu.Items} float={float}>
          <div className={s.container}>{children}</div>
        </FloatingPanel>
      </div>
    </LibMenu>
  );
};
