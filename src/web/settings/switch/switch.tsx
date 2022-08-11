import { Switch } from "@headlessui/react";
import { SwitchButton } from "../../switch/switch";
import s from "./switch.module.css";

interface Props {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label: string;
}

export const SettingsSwitch = (props: Props): JSX.Element => {
  const { checked, setChecked, label } = props;
  return (
    <Switch.Group>
      {/* Switch.Group is not a real element and cannot have className */}
      <div className={s.container}>
        <Switch.Label>{label}</Switch.Label>
        <SwitchButton checked={checked} setChecked={setChecked} />
      </div>
    </Switch.Group>
  );
};
