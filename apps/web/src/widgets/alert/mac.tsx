import { getErrorMessage } from "~src/app/error/message";
import { Button } from "../button/button";
import { AlertButtons, AlertState, AlertValue } from "./context";
import { AlertDialog } from "./dialog";

interface Params extends AlertState {
  title: string;
  error: unknown;
}

const buttons: AlertButtons = (resolve) => {
  return (
    <>
      <AlertDialog.Cancel onClick={() => resolve(false)} asChild>
        <Button asChild>
          <a
            href="https://apps.apple.com/vn/app/samuwrite/id1629628152"
            target="_blank"
          >
            Download Mac App
          </a>
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action onClick={() => resolve(true)} asChild>
        <Button autoFocus primary>
          Dismiss
        </Button>
      </AlertDialog.Action>
    </>
  );
};

export const alertErrorWithMac = async (
  params: Params
): Promise<AlertValue> => {
  const { title, error, alert } = params;
  const promise = await alert({
    title,
    description: getErrorMessage(error),
    buttons,
  });
  return promise;
};
