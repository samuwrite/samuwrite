import { FileDirectoryIcon } from "@primer/octicons-react";
import { useCallback, useContext } from "react";
import { Doc, DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { getErrorMessage } from "../error/message";
import { openDoc } from "../host/open";
import { PromptContext, PromptState, PromptValue } from "../prompt/context";
import { PromptDialog } from "../prompt/dialog";
import { useShortcut } from "../shortcut/shortcut";
import { Tooltip } from "../tooltip/tooltip";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const confirmUnsaved = async ({
  prompt,
}: PromptState): Promise<PromptValue> => {
  const promise = await prompt({
    title: "Are you sure you want to open a new file?",
    description: [
      "You have unsaved changes.",
      "Any unsaved changes will be lost.",
    ].join(" "),
    buttons: (resolve) => (
      <>
        <PromptDialog.Cancel onClick={() => resolve(false)}>
          cancel
        </PromptDialog.Cancel>
        <PromptDialog.Action onClick={() => resolve(true)}>
          Discard unsaved changes
        </PromptDialog.Action>
      </>
    ),
  });
  return promise;
};

const alertError = async ({
  prompt,
  error,
}: PromptState & { error: unknown }): Promise<PromptValue> => {
  const promise = await prompt({
    title: "Cannot open file",
    description: getErrorMessage(error),
    buttons: (resolve) => (
      <>
        <PromptDialog.Cancel onClick={() => resolve(false)} asChild>
          <a href="https://google.com" target="_blank">
            Download Mac App
          </a>
        </PromptDialog.Cancel>
        <PromptDialog.Action onClick={() => resolve(true)}>
          Dismiss
        </PromptDialog.Action>
      </>
    ),
  });
  return promise;
};

const open = async (props: Props & PromptState): Promise<void> => {
  const { doc, editor, setDoc, prompt } = props;

  // Unsaved changes
  if (editor.getValue() !== doc.content) {
    const confirm = await confirmUnsaved({ prompt });
    if (confirm === false) return;
  }

  // Open file from host
  let newDoc: Doc | null;
  try {
    newDoc = await openDoc();
    if (newDoc === null) return;
  } catch (error: unknown) {
    const alert = await alertError({ prompt, error });
    console.log({ alert });
    return;
  }

  // Apply
  editor.setValue(newDoc.content);
  setDoc(newDoc);
};

export const ToolbarOpen = (props: Props): JSX.Element => {
  const { doc, editor, setDoc } = props;
  const { prompt } = useContext(PromptContext);

  const callback = useCallback(() => {
    open({ doc, editor, setDoc, prompt });
  }, [doc, editor, setDoc, prompt]);
  useShortcut("$mod+o", callback);

  return (
    <Tooltip content="Open…" shortcut="⌘ O">
      <ToolbarButton
        Icon={FileDirectoryIcon}
        label="Open"
        onClick={() => open({ ...props, prompt })}
      />
    </Tooltip>
  );
};
