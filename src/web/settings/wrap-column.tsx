import { Range } from "../range/range";
import { SettingsState } from "./type";

interface Props extends SettingsState {}

const COLUMNS = [64, 72, 80, 100, 120];

export const SettingsWrapColumn = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <label>
      <span>Line length</span>
      <span>{settings.wrapColumn}</span>
      <Range
        min={0}
        max={COLUMNS.length - 1}
        step={1}
        value={COLUMNS.indexOf(settings.wrapColumn)}
        onChange={(event) => {
          const index = event.currentTarget.valueAsNumber;
          const value = COLUMNS.at(index);
          if (value === undefined) console.warn(`Unknown index "${index}"`);
          const wrapColumn = value ?? 80;
          setSettings((prev) => ({ ...prev, wrapColumn }));
        }}
      />
    </label>
  );
};
