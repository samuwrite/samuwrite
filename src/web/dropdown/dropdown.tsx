import * as Radix from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import { outline } from "../outline/outline";
import * as s from "./dropdown.module.css";

const Content = forwardRef<HTMLDivElement, Radix.DropdownMenuContentProps>(
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

const Separator = forwardRef<HTMLDivElement, Radix.DropdownMenuSeparatorProps>(
  (props, ref): JSX.Element => {
    return <Radix.Separator ref={ref} className={s.separator} {...props} />;
  }
);

const Item = forwardRef<HTMLDivElement, Radix.DropdownMenuItemProps>(
  (props, ref): JSX.Element => {
    return (
      <Radix.Item
        ref={ref}
        className={[s.item, outline.none].join(" ")}
        {...props}
      />
    );
  }
);

export const Dropdown = {
  Content,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Portal: Radix.Portal,
  Separator,
  Item,
};
