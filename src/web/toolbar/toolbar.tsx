import {
  DownloadIcon,
  FileDirectoryIcon,
  ThreeBarsIcon,
} from "@primer/octicons-react";
import { Editor } from "../editor/type";
import { LayoutState } from "../layout/type";
import { SettingsState } from "../settings/type";
import { ToolbarButton } from "./button/button";
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
        <ToolbarButton Icon={FileDirectoryIcon} label="Open" />
        <ToolbarButton Icon={DownloadIcon} label="Save" />
      </div>
      <h1 className={s.title}>title</h1>
      <div className={s.right}>
        <ToolbarPreview {...props} />
        <ToolbarSettings {...props} />
        <ToolbarButton Icon={ThreeBarsIcon} label="Menu" />
      </div>
    </div>
  );
};
