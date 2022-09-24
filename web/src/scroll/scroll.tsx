import * as Radix from "@radix-ui/react-scroll-area";
import { ReactNode } from "react";
import * as s from "./scroll.module.css";

interface Props extends Radix.ScrollAreaProps {
  children: ReactNode;
}

export const Scroll = (props: Props): JSX.Element => {
  const { children, ...rootProps } = props;
  return (
    <Radix.Root className={s.root} {...rootProps}>
      <Radix.Viewport className={s.viewport}>{children}</Radix.Viewport>
      <Radix.Scrollbar orientation="vertical" className={s.scrollbar}>
        <Radix.Thumb className={s.thumb} />
      </Radix.Scrollbar>
    </Radix.Root>
  );
};
