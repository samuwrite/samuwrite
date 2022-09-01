import * as Radix from "@radix-ui/react-popover";
import { forwardRef } from "react";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import * as s from "./popover.module.css";

const Content = forwardRef<HTMLDivElement, Radix.PopoverContentProps>(
  (props, ref): JSX.Element => {
    return (
      <Radix.Content
        ref={ref}
        className={[s.content, Card.glass, animation.flip].join(" ")}
        sideOffset={12}
        collisionPadding={12}
        {...props}
      />
    );
  }
);

export const Popover = {
  Content,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Portal: Radix.Portal,
};
