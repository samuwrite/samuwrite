import { RadioGroup, RadioGroupProps } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { SettingsRadioOption } from "./option";
import * as s from "./group.module.css";

interface Props extends RadioGroupProps {
  label: string;
  options: { value: string; label: string; icon: JSX.Element }[];
}

export const SettingsRadioGroup = (props: Props): JSX.Element => {
  const { label, options, ...rest } = props;
  return (
    <RadioGroup className={s.container} {...rest}>
      <Label>{label}</Label>
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
