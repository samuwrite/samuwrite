import { DownloadIcon } from "@primer/octicons-react";
import { DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { sendHostMessage } from "../host/send";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const save = async (props: Props): Promise<void> => {
  const { doc, editor, setDoc } = props;

  const content = editor.getValue();

  if (doc.path === null) {
    // New file
    const { path } = await sendHostMessage("saveFileAs", { content });
    setDoc({ content, path });
  } else {
    // Current file
    await sendHostMessage("saveFile", { path: doc.path, content });
    setDoc({ ...doc, content });
  }
};

export const ToolbarSave = (props: Props): JSX.Element => {
  return (
    <ToolbarButton
      Icon={DownloadIcon}
      label="Save"
      onClick={() => save(props)}
    />
  );
};
