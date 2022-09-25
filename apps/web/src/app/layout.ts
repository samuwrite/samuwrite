import { Dispatch, SetStateAction } from "react";

export type AppLayout = "editor" | "preview" | "split";

export interface AppLayoutState {
  layout: AppLayout;
  setLayout: Dispatch<SetStateAction<AppLayout>>;
}
