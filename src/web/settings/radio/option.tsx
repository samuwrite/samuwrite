import { RadioGroup } from "@headlessui/react";
import * as s from "./option.module.css";

interface Props {
  icon: JSX.Element;
  label: string;
  value: unknown;
}

// https://github.com/tailwindlabs/headlessui/discussions/1743
interface OptionRenderPropArg {
  checked: boolean;
  active: boolean;
  disabled: boolean;
}

export const SettingsRadioOption = (props: Props): JSX.Element => {
  const { icon, label, value } = props;

  const body = ({ checked }: OptionRenderPropArg) => (
    <div className={[s.container, checked ? s.selected : ""].join(" ")}>
      <div className={s.icon}>{icon}</div>
      <div className={s.label}>{label}</div>
    </div>
  );

  return (
    <RadioGroup.Option<"div", unknown> value={value}>{body}</RadioGroup.Option>
  );
};
