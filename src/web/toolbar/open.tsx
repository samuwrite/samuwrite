import { FileDirectoryIcon } from "@primer/octicons-react";
import { DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { sendHostMessage } from "../host/send";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const pickerOpts = {
  types: [
    {
      description: "Markdown",
      accept: {
        "text/*": [".md"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

// Copied from https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
async function getTheFileHandle() {
  // @ts-ignore open file picker
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  if (!fileHandle) return;

  return fileHandle;
}

const open = async (props: Props): Promise<void> => {
  const { doc, editor, setDoc } = props;

  const isMac = (window as any).webkit !== undefined;
  if (!isMac) {
    //@ts-ignore This API is experimental and Typescript doesn't support it yet.
    const fileHandle = await getTheFileHandle();
    if (!fileHandle) return;

    const fileBlob: File = await fileHandle.getFile();

    const reader = new FileReader();

    reader.readAsText(fileBlob);

    //@ts-ignore
    reader.addEventListener("load", () => {
      editor.setValue(reader.result as string);
      setDoc({
        content: reader.result as string,
        path: fileBlob.name,
        fileHandle: fileHandle,
      });
    });
    return;
  }

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
