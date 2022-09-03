import * as Radix from "@radix-ui/react-popover";
import { ReactNode } from "react";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import { Scroll } from "../scroll/scroll";
import "./popover.css";
import * as s from "./popover.module.css";

interface Props extends Radix.PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
}

export const Popover = (props: Props): JSX.Element => {
  const { trigger, content, ...rootProps } = props;

  return (
    <Radix.Root {...rootProps}>
      <Radix.Trigger asChild>{trigger}</Radix.Trigger>
      <Radix.Portal>
        <Radix.Content
          sideOffset={12}
          collisionPadding={12}
          className={[s.container, Card.glass, animation.flip].join(" ")}
        >
          <Scroll.Root>
            <Scroll.Viewport>
              <div className={s.content}>{content}</div>
            </Scroll.Viewport>
            <Scroll.Track orientation="vertical">
              <Scroll.Thumb />
            </Scroll.Track>
          </Scroll.Root>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
};
