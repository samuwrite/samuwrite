import { ReactNode, Children } from "react";
import * as s from "./panel.css";

interface Props {
  children: ReactNode;
}

export const SettingsPanel = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <div className={s.container}>
      {Children.map(children, (child, index) => (
        <div className={s.item} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};
