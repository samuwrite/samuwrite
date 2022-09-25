import { Tooltip as Radix } from "@samuwrite/radix";
import { ReactNode } from "react";
import { Card } from "../card/card";
import * as s from "./tooltip.module.css";

interface Props extends Radix.TooltipProps {
  children: ReactNode;
  content: string;
  shortcut?: string;
}

export const Tooltip = (props: Props): JSX.Element => {
  const { children, content, shortcut, ...rootProps } = props;
  return (
    <Radix.Root {...rootProps}>
      <Radix.Trigger asChild>{children}</Radix.Trigger>
      <Radix.Portal>
        <Radix.Content
          className={[s.container, Card.solid].join(" ")}
          sideOffset={6}
          collisionPadding={6}
        >
          <span>{content}</span>
          {shortcut ? <span className={s.shortcut}>{shortcut}</span> : null}
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
};
