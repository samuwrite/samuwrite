import { LogIcon } from "@primer/octicons-react";
import { useCallback, useEffect } from "react";
import tinykeys from "tinykeys";
import { Layout, LayoutState } from "../layout/type";
import { getLayoutFromPreview } from "../settings/preview/preview";
import { Settings } from "../settings/type";
import { useShortcut } from "../shortcut/shortcut";
import { Tooltip } from "../tooltip/tooltip";
import { ToolbarButton } from "./button/button";

interface Props extends LayoutState {
  settings: Settings;
}

export const ToolbarPreview = (props: Props): JSX.Element => {
  const { layout, settings, setLayout } = props;

  const callback = useCallback((): void => {
    const target: Layout =
      layout === "editor" ? getLayoutFromPreview(settings.preview) : "editor";
    setLayout(target);
  }, [layout, settings, setLayout]);

  useShortcut("$mod+r", callback);

  return (
    <Tooltip content="Preview" shortcut="⌘ R">
      <ToolbarButton
        onClick={callback}
        Icon={LogIcon}
        label="Preview"
        selected={layout !== "editor"}
      />
    </Tooltip>
  );
};
