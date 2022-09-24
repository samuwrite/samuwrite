import { Button } from "../button/button";
import { getErrorMessage } from "../error/message";
import { PromptButtons, PromptState, PromptValue } from "./context";
import { PromptDialog } from "./dialog";

interface Params extends PromptState {
  title: string;
  error: unknown;
}

const buttons: PromptButtons = (resolve) => {
  return (
    <>
      <PromptDialog.Cancel onClick={() => resolve(false)} asChild>
        <Button asChild>
          <a
            href="https://apps.apple.com/vn/app/samuwrite/id1629628152"
            target="_blank"
          >
            Download Mac App
          </a>
        </Button>
      </PromptDialog.Cancel>
      <PromptDialog.Action onClick={() => resolve(true)} asChild>
        <Button autoFocus primary>
          Dismiss
        </Button>
      </PromptDialog.Action>
    </>
  );
};

export const alertErrorWithMac = async (
  params: Params
): Promise<PromptValue> => {
  const { title, error, prompt } = params;
  const promise = await prompt({
    title,
    description: getErrorMessage(error),
    buttons,
  });
  return promise;
};
