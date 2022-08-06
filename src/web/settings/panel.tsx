import { LayoutState } from "../layout/type";
import { SettingsPreview } from "../settings/preview";
import { SettingsVim } from "../settings/vim";
import { SettingsTheme } from "./theme";
import { SettingsState } from "./type";

interface Props extends SettingsState, LayoutState {}

export const SettingsPanel = (props: Props): JSX.Element => {
  return (
    <div>
      <SettingsPreview {...props} />
      <SettingsVim {...props} />
      <SettingsTheme {...props} />
    </div>
  );
};
