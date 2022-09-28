import { RadioGroup, Label } from "@samuwrite/radix";
import { SettingsRadioOption } from "./option";
import * as s from "./group.css";

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
        {options.map((option) => {
          const { value, label, icon } = option;
          return (
            <SettingsRadioOption key={value} {...{ value, label, icon }} />
          );
        })}
      </div>
    </RadioGroup.Root>
  );
};
