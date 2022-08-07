import { RadioGroup } from "@headlessui/react";
import { variants } from "@rose-pine/palette";
import { Settings, SettingsState } from "./type";

interface Props extends SettingsState {}

// https://github.com/tailwindlabs/headlessui/discussions/1743
interface OptionRenderPropArg {
  checked: boolean;
  active: boolean;
  disabled: boolean;
}

type Theme = Settings["theme"];

export const SettingsTheme = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <RadioGroup<"div", Theme>
      value={settings.theme}
      onChange={(theme: Theme) => {
        setSettings((prev) => ({ ...prev, theme }));
      }}
    >
      <RadioGroup.Label>Theme</RadioGroup.Label>
      {Object.keys(variants).map((variant) => {
        const value = variant as keyof typeof variants;
        return (
          <RadioGroup.Option<"div", Theme> value={value} key={value}>
            {({ checked }: OptionRenderPropArg) => (
              <div>
                {value} {checked ? "x" : ""}
              </div>
            )}
          </RadioGroup.Option>
        );
      })}
    </RadioGroup>
  );
};
