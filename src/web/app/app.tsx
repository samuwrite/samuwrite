import { Toolbar } from "./toolbar/toolbar";
import { Workspace, WorkspaceLayout } from "./workspace/workspace";
import { useState } from "react";
import "./app.css";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<WorkspaceLayout>("editor");
  return (
    <div>
      <Toolbar setLayout={setLayout} />
      <Workspace layout={layout} />
    </div>
  );
};
