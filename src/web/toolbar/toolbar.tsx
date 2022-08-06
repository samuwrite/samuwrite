import { SettingsState } from "../settings/type";
import { LayoutState } from "../layout/type";
import { ToolbarPreview } from "./preview";
import * as s from "./toolbar.module.css";
import { ToolbarButton } from "./button/button";
import {
  DownloadIcon,
  FileDirectoryIcon,
  PlusIcon,
  ThreeBarsIcon,
} from "@primer/octicons-react";
import { ToolbarSettings } from "./settings";

interface Props extends SettingsState, LayoutState {}

export const Toolbar = (props: Props): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.macPad} />
        <ToolbarButton Icon={FileDirectoryIcon} label="Open" />
        <ToolbarButton Icon={DownloadIcon} label="Save" />
        <ToolbarButton Icon={PlusIcon} label="New" />
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
