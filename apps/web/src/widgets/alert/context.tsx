import { createContext, ReactNode, useCallback, useState } from "react";
import { AlertDialog, AlertDialogContentProps } from "./dialog";

type Value = string | boolean;

export type { Value as AlertValue };

export type AlertButtons = (resolve: (value: Value) => void) => ReactNode;

interface DialogProps extends Omit<AlertDialogContentProps, "buttons"> {
  buttons: AlertButtons;
}

type Alert = (props: DialogProps) => Promise<Value>;

export type { Alert };

export interface AlertState {
  alert: Alert;
}

export const AlertContext = createContext<AlertState>({
  alert: () => {
    throw Error("Alert context is not implemented");
  },
});

interface ProviderProps {
  children: ReactNode;
}

interface DialogPromise {
  dialog: DialogProps;
  resolve: (value: Value) => void;
}

export const AlertProvider = (props: ProviderProps) => {
  const { children } = props;

  const [promise, setPromise] = useState<DialogPromise | null>(null);

  const alert: Alert = useCallback(async (dialog) => {
    const promise = new Promise<Value>((resolve) => {
      setPromise({ dialog, resolve });
    });
    return promise;
  }, []);

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      <AlertDialog.Root
        open={promise !== null}
        onOpenChange={(open) => {
          if (open === false) setPromise(null);
        }}
      >
        {promise !== null ? (
          <AlertDialog.Content
            {...promise.dialog}
            buttons={promise.dialog.buttons(promise.resolve)}
          />
        ) : null}
      </AlertDialog.Root>
    </AlertContext.Provider>
  );
};
