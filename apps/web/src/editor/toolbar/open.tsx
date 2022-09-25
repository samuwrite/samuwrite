import { FileDirectoryIcon } from "@primer/octicons-react";
import { useCallback, useContext } from "react";
import { Button } from "~src/button/button";
import { Doc, DocState } from "~src/doc/type";
import { Editor } from "~src/editor/type";
import { openDoc } from "~src/host/open";
import { PromptContext, PromptState, PromptValue } from "~src/prompt/context";
import { PromptDialog } from "~src/prompt/dialog";
import { alertErrorWithMac } from "~src/prompt/mac";
import { useShortcut } from "~src/shortcut/shortcut";
import { ToolbarButton } from "~src/toolbar/button/button";
import { Tooltip } from "~src/tooltip/tooltip";

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

export const EditorOpen = (props: Props): JSX.Element => {
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
