import { RadioGroup } from "@headlessui/react";
import { THEME_DETAILS } from "../theme/details";
import { Settings, SettingsState } from "./type";

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
      {[...THEME_DETAILS.entries()].map((entry) => {
        const [id, detail] = entry;
        return (
          <RadioGroup.Option<"div", string> value={id} key={id}>
            {({ checked }: OptionRenderPropArg) => (
              <div>
                {id} {checked ? "x" : ""}
              </div>
            )}
          </RadioGroup.Option>
        );
      })}
    </RadioGroup>
  );
};
