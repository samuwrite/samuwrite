import { Dispatch, SetStateAction } from "react";
import { WorkspaceLayout } from "../workspace/workspace";
import * as s from "./toolbar.module.css";

interface Props {
  setLayout: Dispatch<SetStateAction<WorkspaceLayout>>;
}

export const Toolbar = (props: Props): JSX.Element => {
  const { setLayout } = props;
  return (
    <div className={s.container}>
      <button>open</button>
      <button>save</button>
      <h1>title</h1>
      <button onClick={() => setLayout("preview")}>preview</button>
      <button>settings</button>
    </div>
  );
};
