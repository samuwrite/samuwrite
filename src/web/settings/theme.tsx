import { RadioGroup } from "@headlessui/react";
import { variants } from "@rose-pine/palette";
import { SettingsState } from "./type";

interface Props extends SettingsState {}

// https://github.com/tailwindlabs/headlessui/discussions/1743
interface OptionRenderPropArg {
  checked: boolean;
  active: boolean;
  disabled: boolean;
}

export const SettingsTheme = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <RadioGroup<"div", string>
      value={settings.theme}
      onChange={(theme: string) => {
        setSettings((prev) => ({ ...prev, theme }));
      }}
    >
      <RadioGroup.Label>Theme</RadioGroup.Label>
      {Object.keys(variants).map((variant) => {
        return (
          <RadioGroup.Option<"div", string> value={variant} key={variant}>
            {({ checked }: OptionRenderPropArg) => (
              <div>
                {variant} {checked ? "x" : ""}
              </div>
            )}
          </RadioGroup.Option>
        );
      })}
    </RadioGroup>
  );
};
