import { LayoutState } from "../layout/type";
import { SettingsPreview } from "./preview/preview";
import { SettingsVim } from "../settings/vim";
import { SettingsFontSize } from "./font-size";
import { SettingsTheme } from "./theme/theme";
import { SettingsState } from "./type";
import { SettingsWrapColumn } from "./wrap-column";
import * as s from "./panel.module.css";

interface Props extends SettingsState, LayoutState {}

export const SettingsPanel = (props: Props): JSX.Element => {
  return (
    <div className={s.container}>
      {[
        <SettingsTheme {...props} />,
        <SettingsPreview {...props} />,
        <SettingsVim {...props} />,
        <SettingsWrapColumn {...props} />,
        <SettingsFontSize {...props} />,
      ].map((element, index) => (
        <div className={s.item} key={index}>
          {element}
        </div>
      ))}
    </div>
  );
};
