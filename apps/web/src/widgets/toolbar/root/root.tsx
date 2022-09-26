import { ReactNode } from "react";
import { Toolbar as Radix } from "@samuwrite/radix";
import * as s from "./toolbar.css";

interface Props {
  left: ReactNode;
  right: ReactNode;
  center: ReactNode;
}

export const ToolbarRoot = (props: Props): JSX.Element => {
  const { left, right, center } = props;
  return (
    <Radix.Root className={s.container}>
      <div className={s.left}>{left}</div>
      <div className={s.center}>{center}</div>
      <div className={s.right}>{right}</div>
    </Radix.Root>
  );
};
