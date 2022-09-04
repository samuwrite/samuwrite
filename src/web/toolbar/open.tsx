import { FileDirectoryIcon } from "@primer/octicons-react";
import { useCallback, useContext } from "react";
import { AlertContext } from "../alert/context";
import { Doc, DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { getErrorMessage } from "../error/message";
import { openDoc } from "../host/open";
import { useShortcut } from "../shortcut/shortcut";
import { Tooltip } from "../tooltip/tooltip";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const open = async (props: Props & AlertContext): Promise<void> => {
  const { doc, editor, setDoc, alert } = props;

  // Unsaved changes
  if (editor.getValue() !== doc.content) {
    const confirm = await alert({
      title: "Are you sure you want to open a new file?",
      description: [
        "You have unsaved changes.",
        "Any unsaved changes will be lost.",
      ].join(" "),
    });
    if (confirm === false) return;
  }

  // Open file from host
  let newDoc: Doc | null;
  try {
    newDoc = await openDoc();
    if (newDoc === null) return;
  } catch (error: unknown) {
    window.alert(`Cannot open file: ${getErrorMessage(error)}`);
    return;
  }

  // Apply
  editor.setValue(newDoc.content);
  setDoc(newDoc);
};

export const ToolbarOpen = (props: Props): JSX.Element => {
  const { doc, editor, setDoc } = props;
  const { alert } = useContext(AlertContext);

  const callback = useCallback(() => {
    open({ doc, editor, setDoc, alert });
  }, [doc, editor, setDoc, alert]);
  useShortcut("$mod+o", callback);

  return (
    <Tooltip content="Open…" shortcut="⌘ O">
      <ToolbarButton
        Icon={FileDirectoryIcon}
        label="Open"
        onClick={() => open({ ...props, alert })}
      />
    </Tooltip>
  );
};
