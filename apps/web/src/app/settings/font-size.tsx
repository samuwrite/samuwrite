import { EDITOR_TYPOGRAPHY_OPTIONS } from "../editor/input/typography";
import { TypographyIcon } from "@primer/octicons-react";
import { SettingsState } from "./type";
import { SettingsSlider } from "./slider/slider";

interface Props extends SettingsState {}

const SIZES: number[] = [...EDITOR_TYPOGRAPHY_OPTIONS.keys()];

export const SettingsFontSize = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <SettingsSlider
      input={{
        min: 0,
        max: SIZES.length - 1,
        step: 1,
        // Slider supports multiple values (values)
        onValueChange: (values) => {
          const index = values.at(0);
          if (index === undefined) throw Error("No index");
          const value = SIZES.at(index);
          if (value === undefined) console.warn(`Unknown index "${index}"`);
          const fontSize = value ?? 20;
          setSettings((prev) => ({ ...prev, fontSize }));
        },
        value: [SIZES.indexOf(settings.fontSize)],
      }}
      icons={{
        left: <TypographyIcon size={16} />,
        right: <TypographyIcon size={24} />,
      }}
      label="Text size"
      value={`${settings.fontSize} px`}
    />
  );
};
