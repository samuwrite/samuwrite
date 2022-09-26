import { Slider, SliderProps } from "../../slider/slider";
import { Label } from "@samuwrite/radix";
import * as s from "./slider.module.css";

interface Props {
  input: SliderProps;
  icons: {
    left: JSX.Element;
    right: JSX.Element;
  };
  label: string;
  /**
   * text to display next to label, usually current value. This is different
   * from "input.value"
   */
  value: string;
}

export const SettingsSlider = (props: Props): JSX.Element => {
  const { input, label, icons, value } = props;
  return (
    <div className={s.container}>
      <span className={s.header}>
        <Label.Root className={s.label} htmlFor={input.id}>
          {label}
        </Label.Root>
        <span className={s.value}>{value}</span>
      </span>
      <span className={s.control}>
        <span className={s.icon}>{icons.left}</span>
        <span className={s.input}>
          <Slider {...input} />
        </span>
        <span className={s.icon}>{icons.right}</span>
      </span>
    </div>
  );
};
