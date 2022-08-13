import { UseFloatingReturn } from "@floating-ui/react-dom";
import { Popover } from "@headlessui/react";
import * as s from "./panel.module.css";

interface Props {
  float: UseFloatingReturn;
  children: () => JSX.Element;
}

export const PopoverPanel = (props: Props): JSX.Element => {
  const { float, children } = props;
  const { floating, strategy: position, x, y } = float;

  return (
    <Popover.Panel
      ref={floating}
      style={{ position, top: y ?? 0, left: x ?? 0 }}
    >
      <div className={s.container}>{children()}</div>
    </Popover.Panel>
  );
};
