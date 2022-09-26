import { getHost } from "~src/host/get";
import * as s from "./mac.module.css";

export const ToolbarPadMac = (): JSX.Element | null => {
  if (getHost() !== "mac") return null;
  return <div className={s.pad} />;
};
