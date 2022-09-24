import { DashIcon, DotIcon } from "@primer/octicons-react";
import { outline } from "../outline/outline";
import * as s from "./switch.module.css";
import * as Radix from "@radix-ui/react-switch";

interface Props extends Radix.SwitchProps {}

export const SwitchButton = (props: Props): JSX.Element => {
  return (
    <Radix.Root {...props} className={[s.container, outline.onFocus].join(" ")}>
      <span aria-hidden className={[s.icon, s.on].join(" ")}>
        <DashIcon size={12} />
      </span>
      <span aria-hidden className={[s.icon].join(" ")}>
        <DotIcon size={12} />
      </span>
      <Radix.Thumb className={s.thumb} />
    </Radix.Root>
  );
};
