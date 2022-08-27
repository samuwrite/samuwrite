import { DownloadIcon } from "@primer/octicons-react";
import { DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { getErrorMessage } from "../error/message";
import { saveDoc } from "../host/save";
import { saveDocAs } from "../host/save-as";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const save = async (props: Props): Promise<void> => {
  const { doc, editor, setDoc } = props;

  const content = editor.getValue();

  try {
    if (doc.handle === null) {
      // New file, never save -> Save as
      const newDoc = await saveDocAs(content);
      if (newDoc === null) return;
      setDoc(newDoc);
    } else {
      // Opened file -> Save
      await saveDoc(doc.handle, content);
      setDoc({ ...doc, content });
    }
  } catch (error: unknown) {
    window.alert(`Cannot save: ${getErrorMessage(error)}`);
    return;
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
