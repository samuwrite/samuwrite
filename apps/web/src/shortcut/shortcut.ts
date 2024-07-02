import { useEffect } from "react";
import { tinykeys } from "tinykeys";

export const useShortcut = (keys: string, callback: () => void) => {
  useEffect(() => {
    const unsub = tinykeys(window, {
      [keys]: (event) => {
        event.preventDefault();
        callback();
      },
    });
    return () => unsub();
  }, [keys, callback]);
};
