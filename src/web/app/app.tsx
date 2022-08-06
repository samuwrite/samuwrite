import { useState } from "react";
import { Editor } from "../editor/type";
import "../font/font.css";
import { LayoutContainer } from "../layout/container";
import { Layout } from "../layout/type";
import { useSettingsState } from "../settings/state";
import { Toolbar } from "../toolbar/toolbar";
import "./app.css";
import * as s from "./app.module.css";
import { AppTheme } from "./theme";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<Layout>("editor");
  const [editor, setEditor] = useState<Editor | null>(null);
  const { setSettings, settings } = useSettingsState();

  return (
    <div>
      <AppTheme settings={settings} />
      <div className={s.toolbar}>
        <Toolbar
          layout={layout}
          setLayout={setLayout}
          settings={settings}
          setSettings={setSettings}
        />
      </div>
      <LayoutContainer
        layout={layout}
        settings={settings}
        editor={editor}
        setEditor={setEditor}
      />
    </div>
  );
};
