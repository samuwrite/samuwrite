import { ArrowBothIcon } from "@primer/octicons-react";
import { Range } from "../range/range";
import { SettingsRange } from "./range/range";
import { SettingsState } from "./type";

interface Props extends SettingsState {}

const COLUMNS = [64, 72, 80, 100, 120];

export const SettingsWrapColumn = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <SettingsRange
      label="Line length"
      value={`${settings.wrapColumn} characters`}
      input={{
        min: 0,
        max: COLUMNS.length - 1,
        step: 1,
        onChange: (event) => {
          const index = event.currentTarget.valueAsNumber;
          const value = COLUMNS.at(index);
          if (value === undefined) console.warn(`Unknown index "${index}"`);
          const wrapColumn = value ?? 80;
          setSettings((prev) => ({ ...prev, wrapColumn }));
        },
        value: COLUMNS.indexOf(settings.wrapColumn),
      }}
      icons={{
        left: <ArrowBothIcon size={16} />,
        right: <ArrowBothIcon size={24} />,
      }}
    />
  );
};
