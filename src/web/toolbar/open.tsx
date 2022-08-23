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

  const model = editor.getModel();
  if (model === null) throw Error("Editor model is null");
  const range = model.getFullModelRange();
  // From Monaco team: editor.executeEdits should be preferred over
  // model.pushEditOperations
  // - https://github.com/microsoft/monaco-editor/issues/1811#issuecomment-582612219
  editor.executeEdits(null, [{ range, text: response.content }]);

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
