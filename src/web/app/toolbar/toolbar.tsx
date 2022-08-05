import { SettingsPopover } from "../settings/popover";
import { SettingsState } from "../settings/type";
import { LayoutState } from "../layout/type";
import { ToolbarPreview } from "./preview";
import * as s from "./toolbar.module.css";

interface Props extends SettingsState, LayoutState {}

export const Toolbar = (props: Props): JSX.Element => {
  return (
    <div className={s.container}>
      <button>open</button>
      <button>save</button>
      <h1>title</h1>
      <ToolbarPreview {...props} />
      <SettingsPopover {...props} />
    </div>
  );
};
