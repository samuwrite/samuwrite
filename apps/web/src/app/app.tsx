import { Tooltip } from "@samuwrite/radix";
import { useState } from "react";
import { Doc } from "../doc/type";
import { Editor } from "~src/editor/editor";
import { Editor as EditorType } from "../editor/type";
import "../font/font.css";
import { Preview } from "../preview/preview";
import { PromptProvider } from "../prompt/context";
import { useSettingsState } from "../settings/state";
import "./app.css";
import * as s from "./app.module.css";
import { AppTheme } from "./theme";

const initialDoc: Doc = {
  handle: null,
  name: "Untitled",
  content: "",
};

export type Layout = "editor" | "preview" | "split";

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<Layout>("editor");
  const [editor, setEditor] = useState<EditorType | null>(null);
  const { setSettings, settings } = useSettingsState();

  const body = (
    <div className={s.container}>
      {/* Always render Editor to persist its state */}
      <div className={[layout === "preview" ? s.hide : "", s.editor].join(" ")}>
        <EditorMain editor={editor} setEditor={setEditor} settings={settings} />
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
