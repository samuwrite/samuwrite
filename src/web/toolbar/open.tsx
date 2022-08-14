import { FileDirectoryIcon } from "@primer/octicons-react";
import { sendHostMessage } from "../host/send";
import { ToolbarButton } from "./button/button";

const open = async (): Promise<void> => {
  sendHostMessage("openFile", {});
};

export const ToolbarOpen = (): JSX.Element => {
  return <ToolbarButton Icon={FileDirectoryIcon} label="Open" onClick={open} />;
};
