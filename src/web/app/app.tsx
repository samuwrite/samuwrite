import { useRef, useState } from "react";
import "./app.css";
import { Editor } from "./editor/type";
import { LayoutContainer } from "./layout/container";
import { Layout } from "./layout/type";
import { useSettingsState } from "./settings/state";
import { Toolbar } from "./toolbar/toolbar";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<Layout>("editor");
  const editorRef = useRef<Editor | null>(null);
  const { setSettings, settings } = useSettingsState();

  return (
    <div>
      <Toolbar
        layout={layout}
        setLayout={setLayout}
        settings={settings}
        setSettings={setSettings}
      />
      <LayoutContainer layout={layout} editorRef={editorRef} />
    </div>
  );
};
