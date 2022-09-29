import { Toolbar as Radix } from "@samuwrite/radix";
import { ReactNode } from "react";
import { ToolbarState } from "./type";
import * as s from "./toolbar.css";

interface Props extends ToolbarState {
  left: ReactNode;
  right: ReactNode;
  center: ReactNode;
}

export const Toolbar = (props: Props): JSX.Element => {
  const { left, right, center } = props;
  const { toolbar, setToolbar } = props;

  return (
    <Radix.Root
      className={[s.container, toolbar ? s.show : s.hide].join(" ")}
      onMouseEnter={() => setToolbar(true)}
      onFocus={() => setToolbar(true)}
    >
      <div className={s.left}>{left}</div>
      <div className={s.center}>{center}</div>
      <div className={s.right}>{right}</div>
    </Radix.Root>
  );
};
