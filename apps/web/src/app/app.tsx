import { Tooltip } from "@samuwrite/radix";
import { useState } from "react";
import { Editor } from "~src/editor/editor";
import { Editor as EditorType } from "../editor/type";
import "../font/font.css";
import { Preview } from "../preview/preview";
import { PromptProvider } from "../prompt/context";
import { useSettingsState } from "../settings/state";
import "./app.css";
import * as s from "./app.module.css";
import { AppLayout } from "./layout";
import { AppTheme } from "./theme";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<AppLayout>("editor");
  const [editor, setEditor] = useState<EditorType | null>(null);
  const { setSettings, settings } = useSettingsState();

  const body = (
    <div className={s.container}>
      {/* Always render Editor to persist its state */}
      <div className={[layout === "preview" ? s.hide : "", s.editor].join(" ")}>
        <Editor
          {...{ editor, setEditor }}
          {...{ layout, setLayout, settings, setSettings }}
        />
      </div>
      {/* Only render Preview when necessary to avoid re-calculating HTML
      unnecessarily */}
      {layout !== "editor" && editor !== null ? (
        <div className={s.preview}>
          <Preview settings={settings} editor={editor} />
        </div>
      ) : null}
    </div>
  );

  return (
    <PromptProvider>
      <Tooltip.Provider>
        {body}
        <AppTheme settings={settings} />
      </Tooltip.Provider>
    </PromptProvider>
  );
};
