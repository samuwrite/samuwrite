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
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.group}>
          <SettingsTheme {...props} />
        </div>
        <div className={s.group}>
          <SettingsPreview {...props} />
        </div>
        <div className={s.group}>
          <SettingsVim {...props} />
          <hr className={s.line} />
          <SettingsWrapColumn {...props} />
          <hr className={s.line} />
          <SettingsFontSize {...props} />
        </div>
      </div>
    </div>
  );
};
