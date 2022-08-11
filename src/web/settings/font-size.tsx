import { EDITOR_TYPOGRAPHY_OPTIONS } from "../editor/input/typography";
import { SettingsRange } from "./range/range";
import { TypographyIcon } from "@primer/octicons-react";
import { SettingsState } from "./type";

interface Props extends SettingsState {}

const SIZES: number[] = [...EDITOR_TYPOGRAPHY_OPTIONS.keys()];

export const SettingsFontSize = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <SettingsRange
      label="Text size"
      value={`${settings.fontSize} px`}
      input={{
        min: 0,
        max: SIZES.length - 1,
        step: 1,
        onChange: (event) => {
          const index = event.currentTarget.valueAsNumber;
          const value = SIZES.at(index);
          if (value === undefined) console.warn(`Unknown index "${index}"`);
          const fontSize = value ?? 20;
          setSettings((prev) => ({ ...prev, fontSize }));
        },
        value: SIZES.indexOf(settings.fontSize),
      }}
      icons={{
        left: <TypographyIcon size={16} />,
        right: <TypographyIcon size={24} />,
      }}
    />
  );
};
