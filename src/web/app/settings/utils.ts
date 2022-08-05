import { Layout } from "../layout/type";
import { Settings } from "./type";

export const getLayoutFromSettings = (preview: Settings["preview"]): Layout => {
  return preview === "full" ? "preview" : "split";
};
