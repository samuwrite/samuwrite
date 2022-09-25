import { Icon } from "@primer/octicons-react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { outline } from "../../outline/outline";
import * as s from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: Icon;
  label: string;
  selected?: boolean;
}

export const ToolbarButton = forwardRef<HTMLButtonElement, Props>(
  (props, ref): JSX.Element => {
    const { Icon, label, selected, ...rest } = props;
    return (
      <button
        {...rest}
        type="button"
        className={[s.button, selected ? s.selected : "", outline.onFocus].join(
          " "
        )}
        ref={ref}
      >
        <Icon size={16} aria-label={label} />
      </button>
    );
  }
);
