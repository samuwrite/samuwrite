import { FileDirectoryIcon } from "@primer/octicons-react";
import { Doc, DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { getErrorMessage } from "../error/message";
import { openDoc } from "../host/open";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const open = async (props: Props): Promise<void> => {
  const { doc, editor, setDoc } = props;

  // Unsaved changes
  if (editor.getValue() !== doc.content) {
    const msg = [
      "You have unsaved changes.",
      "Are you sure you want to open a new file?",
      "Any unsaved changes will be lost.",
    ].join(" ");
    const confirm = window.confirm(msg);
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
  return (
    <ToolbarButton
      Icon={FileDirectoryIcon}
      label="Open"
      onClick={() => open(props)}
    />
  );
};
