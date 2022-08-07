import { RadioGroup } from "@headlessui/react";
import { SettingsRadioOption } from "./option";
import * as s from "./group.module.css";

interface Props<T extends string | number> {
  value: T;
  onChange: (value: T) => void;
  label: string;
  options: { value: T; label: string; icon: JSX.Element }[];
}

export const SettingsRadioGroup = <T extends string | number>(
  props: Props<T>
): JSX.Element => {
  const { value, onChange, label, options } = props;
  return (
    <RadioGroup<"div", T>
      value={value}
      onChange={onChange}
      className={s.container}
    >
      <RadioGroup.Label className={s.label}>{label}</RadioGroup.Label>
      <div className={s.options}>
        {options.map((option) => (
          <SettingsRadioOption
            key={option.value}
            value={option.value}
            label={option.label}
            icon={option.icon}
          />
        ))}
      </div>
    </RadioGroup>
  );
};
