import { DownloadIcon } from "@primer/octicons-react";
import { Editor } from "../editor/type";
import { LayoutState } from "../layout/type";
import { SettingsState } from "../settings/type";
import { ToolbarButton } from "./button/button";
import { ToolbarMenu } from "./menu";
import { ToolbarOpen } from "./open";
import { ToolbarPreview } from "./preview";
import { ToolbarSettings } from "./settings";
import * as s from "./toolbar.module.css";

interface Props extends SettingsState, LayoutState {
  editor: Editor;
}

export const Toolbar = (props: Props): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.macPad} />
        <ToolbarOpen />
        <ToolbarButton Icon={DownloadIcon} label="Save" />
      </div>
      <h1 className={s.title}>title</h1>
      <div className={s.right}>
        <ToolbarPreview {...props} />
        <ToolbarSettings {...props} />
        <ToolbarMenu />
      </div>
    </div>
  );
};
