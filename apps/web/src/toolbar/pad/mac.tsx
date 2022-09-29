import { getHost } from "~src/utils/host/get";
import * as s from "./mac.css";

export const ToolbarPadMac = (): JSX.Element | null => {
  if (getHost() !== "mac") return null;
  return <div className={s.pad} />;
};
