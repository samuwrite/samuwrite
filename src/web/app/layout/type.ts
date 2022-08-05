import { Dispatch, SetStateAction } from "react";

export type Layout = "editor" | "preview" | "split";

export interface LayoutState {
  layout: Layout;
  setLayout: Dispatch<SetStateAction<Layout>>;
}
