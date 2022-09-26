import { LogIcon } from "@primer/octicons-react";
import { useCallback } from "react";
import { AppLayout, AppLayoutState } from "~src/app/layout";
import { Settings } from "~src/settings/type";
import { useShortcut } from "~src/shortcut/shortcut";
import { ToolbarButton } from "~src/toolbar/button/button";
import { Tooltip } from "~src/tooltip/tooltip";

interface Props extends AppLayoutState {
  settings: Settings;
}

export const EditorPreview = (props: Props): JSX.Element => {
  const { layout, settings, setLayout } = props;

  const callback = useCallback((): void => {
    const target: AppLayout = layout === "editor" ? settings.preview : "editor";
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
