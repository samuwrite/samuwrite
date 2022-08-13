import { FileDirectoryIcon } from "@primer/octicons-react";
import { sendHostMessage } from "../host/send";
import { ToolbarButton } from "./button/button";

const open = async (): Promise<void> => {
  const res = await sendHostMessage("open-file", {});
  console.log("open file", res);
};

export const ToolbarOpen = (): JSX.Element => {
  return <ToolbarButton Icon={FileDirectoryIcon} label="Open" onClick={open} />;
};
