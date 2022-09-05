import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { outline } from "../outline/outline";
import * as s from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  primary?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (props, ref): JSX.Element => {
    const { asChild, primary, ...rest } = props;
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={[
          s.button,
          primary ? s.primary : s.secondary,
          outline.onFocus,
        ].join(" ")}
        {...rest}
      />
    );
  }
);
