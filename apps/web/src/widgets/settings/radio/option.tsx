import { RadioGroup } from "@samuwrite/radix";
import { outline } from "~src/widgets/outline/outline";
import * as s from "./option.css";

interface Props {
  icon: JSX.Element;
  label: string;
  value: string;
}

export const SettingsRadioOption = (props: Props): JSX.Element => {
  const { icon, label, value } = props;

  return (
    <RadioGroup.Item
      value={value}
      className={[s.container, outline.onFocus].join(" ")}
    >
      <span className={s.icon}>{icon}</span>
      <span className={s.label}>{label}</span>
    </RadioGroup.Item>
  );
};
