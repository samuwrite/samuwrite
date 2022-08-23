import { FileDirectoryIcon } from "@primer/octicons-react";
import { DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { sendHostMessage } from "../host/send";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const open = async (props: Props): Promise<void> => {
  const { doc, editor, setDoc } = props;

  // Unsaved changes
  if (editor.getValue() !== doc.content) {
    const confirm = window.confirm("Are you sure?");
    if (confirm === false) return;
  }

  const response = await sendHostMessage("openFile", {});
  editor.setValue(response.content);
  setDoc(response);
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
