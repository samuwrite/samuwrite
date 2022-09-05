import { FileDirectoryIcon } from "@primer/octicons-react";
import { useCallback, useContext } from "react";
import { Button } from "../button/button";
import { Doc, DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { openDoc } from "../host/open";
import { PromptContext, PromptState, PromptValue } from "../prompt/context";
import { PromptDialog } from "../prompt/dialog";
import { alertErrorWithMac } from "../prompt/mac";
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
        <PromptDialog.Cancel asChild onClick={() => resolve(false)}>
          <Button autoFocus>Cancel</Button>
        </PromptDialog.Cancel>
        <PromptDialog.Action asChild onClick={() => resolve(true)}>
          <Button primary>Discard changes</Button>
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
    const title = "Cannot open file";
    await alertErrorWithMac({ title, prompt, error });
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
