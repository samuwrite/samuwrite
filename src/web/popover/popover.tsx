import { Popover as LibPopover } from "@headlessui/react";
import { ReactNode } from "react";
import { useFloating } from "../floating/hook";
import { FloatingPanel } from "../floating/panel";
import * as s from "./popover.module.css";

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
      <div className={s.wrapper}>
        <FloatingPanel Panel={LibPopover.Panel} float={float}>
          <div className={s.container}>{children}</div>
        </FloatingPanel>
      </div>
    </LibPopover>
  );
};
