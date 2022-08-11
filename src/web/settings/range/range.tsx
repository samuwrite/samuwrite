import { Icon } from "@primer/octicons-react";
import { Range, RangeProps } from "../../range/range";
import * as s from "./range.module.css";

interface Props {
  input: RangeProps;
  label: string;
  value: string;
  icons: {
    left: JSX.Element;
    right: JSX.Element;
  };
}

export const SettingsRange = (props: Props): JSX.Element => {
  const { input, label, icons, value } = props;
  return (
    <label className={s.container}>
      <span className={s.header}>
        <span className={s.label}>{label}</span>
        <span className={s.value}>{value}</span>
      </span>
      <span className={s.control}>
        <span className={s.icon}>{icons.left}</span>
        <span className={s.input}>
          <Range {...input} />
        </span>
        <span className={s.icon}>{icons.right}</span>
      </span>
    </label>
  );
};
