import { createContext, ReactNode, useCallback, useState } from "react";
import { AlertDialog } from "./dialog";

export interface AlertParams {
  title: string;
  description: string;
}

export interface AlertContext {
  alert: (params: AlertParams) => Promise<boolean>;
}

export const AlertContext = createContext<AlertContext>({
  alert: () => {
    throw Error("Alert context is not implemented");
  },
});

interface ProviderProps {
  children: ReactNode;
}

interface State {
  params: AlertParams;
  resolve: (value: boolean) => void;
  reject: (reason?: any) => void;
}

export const AlertProvider = (props: ProviderProps) => {
  const { children } = props;

  const [alert, setAlert] = useState<State | null>(null);

  const callback = useCallback(
    async (params: AlertParams): Promise<boolean> => {
      const promise = new Promise<boolean>((resolve, reject) => {
        setAlert({ params, resolve, reject });
      });
      return promise;
    },
    []
  );

  return (
    <AlertContext.Provider value={{ alert: callback }}>
      {children}
      <AlertDialog.Root
        open={alert !== null}
        onOpenChange={(open) => {
          console.log({ open });
          if (open === false) setAlert(null);
        }}
      >
        <AlertDialog.Content>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
          <AlertDialog.Cancel onClick={() => alert?.resolve(false)}>
            Cancel
          </AlertDialog.Cancel>
          <AlertDialog.Action onClick={() => alert?.resolve(true)}>
            Yes delete
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </AlertContext.Provider>
  );
};
