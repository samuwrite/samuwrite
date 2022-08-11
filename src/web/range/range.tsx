import { CSSProperties } from "react";
import { outline } from "../outline/outline";
import * as s from "./range.module.scss";

type Props = JSX.IntrinsicElements["input"] & {
  step: number;
  min: number;
  max: number;
  value: number;
};

export type { Props as RangeProps };

const getCss = (props: Props): CSSProperties => {
  const { min, max, step } = props;
  const steps = (max - min) / step;
  const percent = 100 / steps;
  // range's track uses this variable to render marks
  const style = { "--step": `${percent}%` } as CSSProperties;
  return style;
};

export const Range = (props: Props): JSX.Element => {
  const { ...native } = props;
  return (
    <input
      {...native}
      type="range"
      className={[s.range, outline.onFocus].join(" ")}
      style={getCss(props)}
    />
  );
};
