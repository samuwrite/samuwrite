import { Label } from "@radix-ui/react-label";
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
      <Label htmlFor={id}>{label}</Label>
      <SwitchButton id={id} checked={checked} onCheckedChange={setChecked} />
    </div>
  );
};
