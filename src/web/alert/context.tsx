import { createContext, ReactNode, useCallback, useState } from "react";
import {
  AlertDialog,
  AlertDialogContentButton,
  AlertDialogContentProps,
} from "./dialog";

// Remove callbacks in action and cancel
interface DialogProps
  extends Omit<AlertDialogContentProps, "cancel" | "action"> {
  cancel?: Omit<AlertDialogContentButton, "onClick">;
  action?: Omit<AlertDialogContentButton, "onClick">;
}

export interface AlertContext {
  alert: (props: DialogProps) => Promise<boolean>;
}

export const AlertContext = createContext<AlertContext>({
  alert: () => {
    throw Error("Alert context is not implemented");
  },
});

interface ProviderProps {
  children: ReactNode;
}

interface DialogPromise {
  dialog: DialogProps;
  resolve: (value: boolean) => void;
  reject: (reason?: any) => void;
}

const Dialog = (props: { promise: DialogPromise }) => {
  const { dialog, resolve } = props.promise;
  const { action, cancel, ...rest } = dialog;

  return (
    <AlertDialog.Content
      cancel={
        cancel
          ? { label: cancel.label, onClick: () => resolve(false) }
          : undefined
      }
      action={
        action
          ? { label: action.label, onClick: () => resolve(true) }
          : undefined
      }
      {...rest}
    />
  );
};

export const AlertProvider = (props: ProviderProps) => {
  const { children } = props;

  const [promise, setPromise] = useState<DialogPromise | null>(null);

  const callback = useCallback(
    async (dialog: DialogProps): Promise<boolean> => {
      const promise = new Promise<boolean>((resolve, reject) => {
        setPromise({ dialog, reject, resolve });
      });
      return promise;
    },
    []
  );

  return (
    <AlertContext.Provider value={{ alert: callback }}>
      {children}
      <AlertDialog.Root
        open={promise !== null}
        onOpenChange={(open) => {
          if (open === false) setPromise(null);
        }}
      >
        {promise !== null ? <Dialog promise={promise} /> : null}
      </AlertDialog.Root>
    </AlertContext.Provider>
  );
};
