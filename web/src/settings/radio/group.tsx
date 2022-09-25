import { RadioGroup, Label } from "@samuwrite/radix";
import { SettingsRadioOption } from "./option";
import * as s from "./group.module.css";

interface Props extends RadioGroup.RadioGroupProps {
  label: string;
  options: { value: string; label: string; icon: JSX.Element }[];
}

export const SettingsRadioGroup = (props: Props): JSX.Element => {
  const { label, options, ...rest } = props;
  return (
    <RadioGroup.Root className={s.container} {...rest}>
      <Label.Root>{label}</Label.Root>
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
    </RadioGroup.Root>
  );
};
