import { RadioGroup } from "@headlessui/react";
import { outline } from "../../outline/outline";
import * as s from "./option.module.css";

interface Props {
  icon: JSX.Element;
  label: string;
  value: unknown;
}

export const SettingsRadioOption = (props: Props): JSX.Element => {
  const { icon, label, value } = props;

  return (
    <RadioGroup.Option<"div", unknown>
      value={value}
      className={({ checked }) =>
        [s.container, checked ? s.selected : "", outline.onFocus].join(" ")
      }
    >
      <div className={s.icon}>{icon}</div>
      <div className={s.label}>{label}</div>
    </RadioGroup.Option>
  );
};
