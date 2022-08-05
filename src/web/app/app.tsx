import { useState } from "react";
import "./app.css";
import { LayoutContainer } from "./layout/container";
import { Layout } from "./layout/type";
import { Settings } from "./settings/type";
import { Toolbar } from "./toolbar/toolbar";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<Layout>("editor");
  const [settings, setSettings] = useState<Settings>({ preview: "split" });
  return (
    <div>
      <Toolbar
        layout={layout}
        setLayout={setLayout}
        settings={settings}
        setSettings={setSettings}
      />
      <LayoutContainer layout={layout} />
    </div>
  );
};
