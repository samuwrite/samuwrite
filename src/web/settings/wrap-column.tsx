import { ArrowBothIcon } from "@primer/octicons-react";
import { SettingsSlider } from "./slider/slider";
import { SettingsState } from "./type";

interface Props extends SettingsState {}

const COLUMNS = [64, 72, 80, 100, 120];

export const SettingsWrapColumn = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <SettingsSlider
      input={{
        min: 0,
        max: COLUMNS.length - 1,
        step: 1,
        onValueChange: (values) => {
          const index = values.at(0);
          if (index === undefined) throw Error("No index");
          const value = COLUMNS.at(index);
          if (value === undefined) console.warn(`Unknown index "${index}"`);
          const wrapColumn = value ?? 80;
          setSettings((prev) => ({ ...prev, wrapColumn }));
        },
        value: [COLUMNS.indexOf(settings.wrapColumn)],
      }}
      icons={{
        left: <ArrowBothIcon size={16} />,
        right: <ArrowBothIcon size={24} />,
      }}
      label="Line length"
      value={`${settings.wrapColumn} characters`}
    />
  );
};
