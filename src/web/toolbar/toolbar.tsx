import { SettingsState } from "../settings/type";
import { LayoutState } from "../layout/type";
import { ToolbarPreview } from "./preview";
import * as s from "./toolbar.module.css";
import { ToolbarButton } from "./button/button";
import { DownloadIcon, FileDirectoryIcon } from "@primer/octicons-react";
import { ToolbarSettings } from "./settings";

interface Props extends SettingsState, LayoutState {}

export const Toolbar = (props: Props): JSX.Element => {
  return (
    <div className={s.container}>
      <ToolbarButton Icon={FileDirectoryIcon} label="Open" />
      <ToolbarButton Icon={DownloadIcon} label="Save" />
      <h1>title</h1>
      <ToolbarPreview {...props} />
      <ToolbarSettings {...props} />
    </div>
  );
};
