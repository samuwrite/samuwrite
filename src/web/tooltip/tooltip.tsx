import { ReactNode } from "react";
import { useFloating } from "../floating/hook";
import * as sCard from "../card/card.module.css";
import * as s from "./tooltip.module.css";

interface Props {
  children: ReactNode;
  text: string;
}

export const Tooltip = (props: Props): JSX.Element => {
  const { children, text } = props;
  const { floating, reference, strategy, x, y } = useFloating();
  return (
    <>
      <div ref={reference}>{children}</div>
      <div
        ref={floating}
        className={[sCard.solid, s.container].join(" ")}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        {text}
      </div>
    </>
  );
};
