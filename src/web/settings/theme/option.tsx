import { RadioGroup } from "@headlessui/react";
import { variants } from "@rose-pine/palette";
import { Settings } from "../type";
import { ThemeRose } from "./rose";
import * as s from "./option.module.css";

interface Props {
  theme: Settings["theme"];
}

// https://github.com/tailwindlabs/headlessui/discussions/1743
interface OptionRenderPropArg {
  checked: boolean;
  active: boolean;
  disabled: boolean;
}

export const ThemeOption = (props: Props): JSX.Element => {
  const { theme } = props;

  const variant = variants[theme];

  const body = ({ checked }: OptionRenderPropArg) => (
    <div className={[s.container, checked ? s.selected : ""].join(" ")}>
      <div className={s.icon} style={{ backgroundColor: variant.base.hex }}>
        <ThemeRose variant={variant} />
      </div>
      <div className={s.label}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </div>
    </div>
  );

  return (
    <RadioGroup.Option<"div", Settings["theme"]> value={theme}>
      {body}
    </RadioGroup.Option>
  );
};
