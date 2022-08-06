import { Icon } from "@primer/octicons-react";
import { ButtonHTMLAttributes, ElementType } from "react";
import * as s from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: Icon;
  label: string;
  selected?: boolean;
  as?: ElementType;
}

export const ToolbarButton = (props: Props): JSX.Element => {
  const { Icon, label, selected, as, ...rest } = props;
  const Button = as ?? "button";
  return (
    <Button {...rest} type="button" className={s.button}>
      <Icon size={16} aria-label={label} />
      {selected ? "x" : ""}
    </Button>
  );
};
