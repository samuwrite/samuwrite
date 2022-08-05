import { useState } from "react";
import { useStickyState } from "../lib/state/sticky";
import "./app.css";
import { LayoutMain } from "./layout/main";
import { Layout } from "./layout/type";
import { Settings } from "./settings/type";
import { Toolbar } from "./toolbar/toolbar";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<Layout>("editor");

  const [settings, setSettings] = useStickyState<Settings>(
    { preview: "split" },
    "settings"
  );

  return (
    <div>
      <Toolbar
        layout={layout}
        setLayout={setLayout}
        settings={settings}
        setSettings={setSettings}
      />
      <LayoutMain layout={layout} />
    </div>
  );
};
