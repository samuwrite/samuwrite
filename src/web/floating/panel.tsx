import { UseFloatingReturn } from "@floating-ui/react-dom";
import { FloatingPortal } from "@floating-ui/react-dom-interactions";
import { Popover, Menu, Transition } from "@headlessui/react";
import { ReactNode, useRef } from "react";
import { outline } from "../outline/outline";
import * as s from "./panel.module.css";
import * as sCard from "../card/card.module.css";

interface Props {
  float: UseFloatingReturn;
  children: ReactNode;
  Panel: typeof Popover.Panel | typeof Menu.Items;
}

export const FloatingPanel = (props: Props): JSX.Element => {
  const { float, children, Panel } = props;
  const { floating, strategy: position, x, y } = float;

  // Temporary ref to bridge Headless UI and Floating UI. See beforeEnter
  // below. See also:
  // - https://github.com/thien-do/samuwrite-old/blob/main/src/popover/portal/portal.tsx#L15
  const wrapper = useRef<HTMLDivElement>(null);

  return (
    <FloatingPortal>
      {/* Floating element must always exist in the DOM, so it must be outside
      of Transition. This is more reliable than Transition's unmount prop. */}
      <div
        ref={wrapper}
        style={{ position, top: y ?? 0, left: x ?? 0 }}
        className={s.wrapper}
      >
        <Transition
          className={s.transition}
          enter={s.enter}
          enterFrom={s.hide}
          enterTo={s.show}
          leave={s.leave}
          leaveFrom={s.show}
          leaveTo={s.hide}
          // Dynamically assign floating element to trigger correct layout
          // calculation
          beforeEnter={() => floating(wrapper.current)}
          // Clean up the ref. Without this Transition will lost enter phase.
          afterLeave={() => floating(null)}
        >
          {/* Focus outline is put at scroll container */}
          <Panel
            className={[s.container, outline.onFocus, sCard.glass].join(" ")}
          >
            {children}
          </Panel>
        </Transition>
      </div>
    </FloatingPortal>
  );
};
