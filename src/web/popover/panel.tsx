import { UseFloatingReturn } from "@floating-ui/react-dom";
import { Popover, Transition } from "@headlessui/react";
import { useRef } from "react";
import * as s from "./panel.module.css";

interface Props {
  float: UseFloatingReturn;
  children: () => JSX.Element;
}

export const PopoverPanel = (props: Props): JSX.Element => {
  const { float, children } = props;
  const { floating, strategy: position, x, y } = float;

  // Headless UI + Floating UI
  // https://github.com/thien-do/samuwrite-old/blob/177975d658a8097bd059859f48a564711cc28c9d/src/popover/portal/portal.tsx#L15
  const hackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={hackRef}
      style={{ position, top: y ?? 0, left: x ?? 0 }}
      className={s.wrapper}
    >
      <Transition
        className={s.always}
        enter={s.enter}
        enterFrom={s.hide}
        enterTo={s.show}
        leave={s.leave}
        leaveFrom={s.show}
        leaveTo={s.hide}
        beforeEnter={() => floating(hackRef.current)}
        afterLeave={() => floating(null)}
      >
        <Popover.Panel>
          <div className={s.container}>{children()}</div>
        </Popover.Panel>
      </Transition>
    </div>
  );
};
