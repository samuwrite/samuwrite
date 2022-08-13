import { useEffect } from "react";

export const useAppMessage = () => {
  useEffect(() => {
    (window as any).samuwrite = {
      postMessage: (message: any) => {
        console.log("hear", message);
      },
    };
  }, []);
};
