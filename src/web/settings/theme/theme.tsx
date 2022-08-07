import { RadioGroup } from "@headlessui/react";
import * as s from "./theme.module.css";
import { variants } from "@rose-pine/palette";
import { Settings, SettingsState } from "../type";
import { ThemeOption } from "./option";

interface Props extends SettingsState {}

type Theme = Settings["theme"];

export const SettingsTheme = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <RadioGroup<"div", Theme>
      value={settings.theme}
      onChange={(theme: Theme) => {
        setSettings((prev) => ({ ...prev, theme }));
      }}
      className={s.container}
    >
      <RadioGroup.Label>Theme</RadioGroup.Label>
      <div className={s.options}>
        {Object.keys(variants).map((variant) => {
          const theme = variant as keyof typeof variants;
          return <ThemeOption key={theme} theme={theme} />;
        })}
      </div>
    </RadioGroup>
  );
};
