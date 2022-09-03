import * as Radix from "@radix-ui/react-popover";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import * as s from "./popover.module.css";
import "./popover.css";
import { ReactNode } from "react";
import { Scroll } from "../scroll/scroll";

interface Props {
  children: ReactNode;
}

const Content = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <Radix.Content
      className={[s.container, Card.glass, animation.flip].join(" ")}
      sideOffset={12}
      collisionPadding={12}
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
};

export const Popover = {
  Content,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Portal: Radix.Portal,
};
