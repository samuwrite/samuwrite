import { Icon } from "@primer/octicons-react";
import { Toolbar as Radix } from "@samuwrite/radix";
import { forwardRef } from "react";
import { outline } from "~src/widgets/outline/outline";
import * as s from "./button.css";

interface Props extends Radix.ToolbarButtonProps {
  Icon: Icon;
  label: string;
  selected?: boolean;
}

export const ToolbarButton = forwardRef<HTMLButtonElement, Props>(
  (props, ref): JSX.Element => {
    const { Icon, label, selected, ...rest } = props;
    return (
      <Radix.Button
        {...rest}
        type="button"
        className={[s.button, selected ? s.selected : "", outline.onFocus].join(
          " "
        )}
        ref={ref}
      >
        <Icon size={16} aria-label={label} />
      </Radix.Button>
    );
  }
);
