import { Dispatch, SetStateAction } from "react";

export type Toolbar = boolean;

export interface ToolbarState {
  toolbar: Toolbar;
  setToolbar: Dispatch<SetStateAction<Toolbar>>;
}
