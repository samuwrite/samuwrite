import { useEffect, useState } from "react";

// https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
export const useStickyState = <T>(defaultValue: T, key: string) => {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
