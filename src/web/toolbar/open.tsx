import { FileDirectoryIcon } from "@primer/octicons-react";
import { ToolbarButton } from "./button/button";

const open = (): void => {
  try {
    (window as any).webkit.messageHandlers.samuwriteMessageHandler.postMessage({
      type: "open",
      payload: { foo: "bar" },
    });
  } catch (e: unknown) {
    console.log("error", e);
  }
};

export const ToolbarOpen = (): JSX.Element => {
  return <ToolbarButton Icon={FileDirectoryIcon} label="Open" onClick={open} />;
};
