import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { outline } from "../../outline/outline";
import * as s from "./option.module.css";

interface Props {
  icon: JSX.Element;
  label: string;
  value: string;
}

export const SettingsRadioOption = (props: Props): JSX.Element => {
  const { icon, label, value } = props;

  return (
    <RadioGroupItem
      value={value}
      className={[s.container, outline.onFocus].join(" ")}
    >
      <span className={s.icon}>{icon}</span>
      <span className={s.label}>{label}</span>
    </RadioGroupItem>
  );
};
