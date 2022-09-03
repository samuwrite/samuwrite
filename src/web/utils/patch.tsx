import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";

export const patch = <T, P>(
  Element: ForwardRefExoticComponent<P & RefAttributes<T>>,
  className: string
) =>
  forwardRef<T, P>((props, ref) => {
    return <Element className={className} {...props} ref={ref} />;
  });
