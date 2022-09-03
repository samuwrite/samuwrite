import { LogIcon } from "@primer/octicons-react";
import { useCallback, useEffect } from "react";
import tinykeys from "tinykeys";
import { Layout, LayoutState } from "../layout/type";
import { getLayoutFromPreview } from "../settings/preview/preview";
import { Settings } from "../settings/type";
import { Tooltip } from "../tooltip/tooltip";
import { ToolbarButton } from "./button/button";

interface Props extends LayoutState {
  settings: Settings;
}

export const ToolbarPreview = (props: Props): JSX.Element => {
  const { layout, settings, setLayout } = props;

  const toggleLayout = useCallback(() => {
    const target: Layout =
      layout === "editor" ? getLayoutFromPreview(settings.preview) : "editor";
    setLayout(target);
  }, [layout, settings, setLayout]);

  useEffect(() => {
    const unsub = tinykeys(window, {
      "$mod+r": (event) => {
        event.preventDefault();
        toggleLayout();
      },
    });
    return () => unsub();
  }, [toggleLayout]);

  return (
    <Tooltip content="Preview" shortcut="⌘ R">
      <ToolbarButton
        onClick={toggleLayout}
        Icon={LogIcon}
        label="Preview"
        selected={layout !== "editor"}
      />
    </Tooltip>
  );
};
