import { Icon } from "@primer/octicons-react";
import { ButtonHTMLAttributes, ElementType, forwardRef } from "react";
import * as s from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: Icon;
  label: string;
  selected?: boolean;
  as?: ElementType;
}

export const ToolbarButton = forwardRef<HTMLElement, Props>(
  (props, ref): JSX.Element => {
    const { Icon, label, selected, as, ...rest } = props;
    const Button = as ?? "button";
    return (
      <Button
        {...rest}
        type="button"
        className={[s.button, selected ? s.selected : ""].join(" ")}
        ref={ref}
      >
        <Icon size={16} aria-label={label} />
      </Button>
    );
  }
);
