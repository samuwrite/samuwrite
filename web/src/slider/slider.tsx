import { Slider as Radix } from "@samuwrite/radix";
import { CSSProperties } from "react";
import { outline } from "../outline/outline";
import * as s from "./slider.module.css";

interface Props extends Radix.SliderProps {}

export type { Props as SliderProps };

const getMarkCss = (props: Props): CSSProperties => {
  const { min, max, step } = props;
  if (max === undefined || min === undefined || step === undefined) return {};

  const steps = (max - min) / step;
  const percent = 100 / steps;
  // slider's track uses this variable to render marks
  const style = { "--mark-step": `${percent}%` } as CSSProperties;
  return style;
};

export const Slider = (props: Props): JSX.Element => {
  return (
    <Radix.Root className={s.root} {...props}>
      <Radix.Track className={s.track}>
        <Radix.Range className={s.range} />
        {/* Radix does not have this */}
        <span className={s.marks} style={getMarkCss(props)} />
      </Radix.Track>
      {/* Radix supports multiple */}
      <Radix.Thumb className={[s.thumb, outline.onFocus].join(" ")} />
    </Radix.Root>
  );
};
