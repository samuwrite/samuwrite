import * as s from "./panel.module.css";
import { SettingsState } from "./type";

type SettingComponent = (props: SettingsState) => JSX.Element;

interface Props extends SettingsState {
  children: SettingComponent[];
}

export const SettingsPanel = (props: Props): JSX.Element => {
  const { children, ...settings } = props;
  return (
    <div className={s.container}>
      {children.map((Component, index) => (
        <div className={s.item} key={index}>
          <Component {...settings} />
        </div>
      ))}
    </div>
  );
};
