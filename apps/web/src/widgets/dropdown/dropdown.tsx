import { DropdownMenu as Radix } from "@samuwrite/radix";
import { animation } from "../animation/animation";
import { outline } from "../outline/outline";
import * as s from "./dropdown.css";

const Content = (props: Radix.MenuContentProps): JSX.Element => {
  return (
    <Radix.Portal>
      <Radix.Content
        className={[s.content, animation.flip].join(" ")}
        sideOffset={12}
        collisionPadding={12}
        {...props}
      />
    </Radix.Portal>
  );
};

const Separator = (props: Radix.MenuSeparatorProps): JSX.Element => {
  return <Radix.Separator className={s.separator} {...props} />;
};

const Item = (props: Radix.MenuItemProps): JSX.Element => {
  return <Radix.Item className={[s.item, outline.none].join(" ")} {...props} />;
};

export const Dropdown = {
  Content,
  Separator,
  Item,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
};
