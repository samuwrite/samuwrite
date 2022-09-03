import * as Radix from "@radix-ui/react-popover";
import { forwardRef } from "react";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import { Scroll } from "../scroll/scroll";
import "./popover.css";
import * as s from "./popover.module.css";

const Content = forwardRef<HTMLDivElement, Radix.PopoverContentProps>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;
    return (
      <Radix.Content
        sideOffset={12}
        collisionPadding={12}
        className={[s.container, Card.glass, animation.flip].join(" ")}
        {...rest}
        ref={ref}
      >
        <Scroll.Root>
          <Scroll.Viewport>
            <div className={s.content}>{children}</div>
          </Scroll.Viewport>
          <Scroll.Track orientation="vertical">
            <Scroll.Thumb />
          </Scroll.Track>
        </Scroll.Root>
      </Radix.Content>
    );
  }
);

export const Popover = {
  Content,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Portal: Radix.Portal,
};
