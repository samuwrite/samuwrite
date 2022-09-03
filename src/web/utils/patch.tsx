import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";

export const patch = <T, P>(
  Element: ForwardRefExoticComponent<P & RefAttributes<T>>,
  extraProps: Partial<P>
) =>
  forwardRef<T, P>((props, ref) => {
    return <Element {...extraProps} {...props} ref={ref} />;
  });
