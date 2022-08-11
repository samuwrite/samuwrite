import { Switch } from "@headlessui/react";
import { DashIcon, DotIcon } from "@primer/octicons-react";
import { outline } from "../outline/outline";
import * as s from "./switch.module.css";

interface Props {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export const SwitchButton = (props: Props): JSX.Element => {
  const { checked, setChecked } = props;

  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      className={[s.container, checked ? s.active : "", outline.onFocus].join(
        " "
      )}
    >
      <span aria-hidden className={[s.icon, s.on].join(" ")}>
        <DashIcon size={12} />
      </span>
      <span aria-hidden className={[s.icon].join(" ")}>
        <DotIcon size={12} />
      </span>
      <span aria-hidden className={s.thumb} />
    </Switch>
  );
};
