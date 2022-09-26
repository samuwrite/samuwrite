import { ReactNode } from "react";
import * as s from "./stack.module.css";

interface Props {
  left: ReactNode;
  right: ReactNode;
  center: ReactNode;
}

export const ToolbarStack = (props: Props): JSX.Element => {
  const { left, right, center } = props;
  return (
    <div className={s.container}>
      <div className={s.left}>{left}</div>
      <div className={s.center}>{center}</div>
      <div className={s.right}>{right}</div>
    </div>
  );
};
