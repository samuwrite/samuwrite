import { EDITOR_TYPOGRAPHY_OPTIONS } from "../editor/input/typography";
import { SettingsState } from "./type";

interface Props extends SettingsState {}

const SIZES: number[] = [...EDITOR_TYPOGRAPHY_OPTIONS.keys()];

export const SettingsFontSize = (props: Props): JSX.Element => {
  const { setSettings, settings } = props;
  return (
    <label>
      <span>Text size</span>
      <span>{settings.fontSize}</span>
      <input
        type="range"
        min={0}
        max={SIZES.length - 1}
        step={1}
        value={SIZES.indexOf(settings.fontSize)}
        onChange={(event) => {
          const index = event.currentTarget.valueAsNumber;
          const value = SIZES.at(index);
          if (value === undefined) console.warn(`Unknown index "${index}"`);
          const fontSize = value ?? 20;
          setSettings((prev) => ({ ...prev, fontSize }));
        }}
      />
    </label>
  );
};
