import { Popover as Radix } from "@samuwrite/radix";
import { animation } from "../animation/animation";
import { Scroll } from "../scroll/scroll";
import * as s from "./popover.css";

const Content = (props: Radix.PopoverContentProps): JSX.Element => {
  const { children, ...rest } = props;
  return (
    <Radix.Portal>
      <Radix.Content
        sideOffset={12}
        collisionPadding={12}
        className={[s.container, animation.flip].join(" ")}
        {...rest}
      >
        <Scroll>
          <div className={s.content}>{children}</div>
        </Scroll>
      </Radix.Content>
    </Radix.Portal>
  );
};

export const Popover = {
  Content,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
};
