import { Tooltip } from "@samuwrite/radix";
import { useState } from "react";
import { Editor } from "~src/editor/editor";
import { Editor as EditorType } from "~src/editor/type";
import { useSettingsState } from "~src/settings/state";
import { AlertProvider } from "~src/widgets/alert/context";
import { Toolbar } from "~src/toolbar/type";
import * as s from "./app.css";
import "./font/font.css";
import { Layout } from "./layout";
import "./reset.css";
import { AppTheme } from "./theme";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<Layout>("editor");
  const { setSettings, settings } = useSettingsState();
  const [editor, setEditor] = useState<null | EditorType>(null);
  const [toolbar, setToolbar] = useState<Toolbar>(true);

  // Always render Editor to persist its state
  const editorElement = (
    <div className={[layout === "preview" ? s.hide : "", s.editor].join(" ")}>
      <Editor {...{ editor, setEditor, settings, setToolbar, toolbar }} />
    </div>
  );

  // Only render Preview when necessary to avoid re-calculating HTML unnecessarily
  const previewElement =
    layout !== "editor" ? <div className={s.preview}>preview</div> : null;

  return (
    <AlertProvider>
      <Tooltip.Provider>
        <AppTheme settings={settings} />
        <div className={s.container}>
          {editorElement}
          {previewElement}
        </div>
      </Tooltip.Provider>
    </AlertProvider>
  );
};
