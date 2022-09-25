import { Label } from "@samuwrite/radix";
import { SwitchButton } from "../../switch/switch";
import * as s from "./switch.module.css";

interface Props {
  id: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label: string;
}

export const SettingsSwitch = (props: Props): JSX.Element => {
  const { id, checked, setChecked, label } = props;
  return (
    <div className={s.container}>
      <Label.Root htmlFor={id}>{label}</Label.Root>
      <SwitchButton id={id} checked={checked} onCheckedChange={setChecked} />
    </div>
  );
};
