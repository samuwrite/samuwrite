import { Tooltip } from "@samuwrite/radix";
import { useState } from "react";
import { Doc } from "~src/doc/type";
import { Editor } from "~src/editor/editor";
import { Editor as EditorType } from "~src/editor/type";
import "~src/font/font.css";
import { Layout } from "~src/layout/layout";
import { Layout as LayoutType } from "~src/layout/type";
import { Preview } from "~src/preview/preview";
import { PromptProvider } from "~src/prompt/context";
import { useSettingsState } from "~src/settings/state";
import { Toolbar } from "~src/toolbar/toolbar";
import "./app.css";
import * as s from "./app.module.css";
import { AppTheme } from "./theme";

const initialDoc: Doc = {
  handle: null,
  name: "Untitled",
  content: "",
};

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<LayoutType>("editor");
  const [editor, setEditor] = useState<EditorType | null>(null);
  const { setSettings, settings } = useSettingsState();
  const [doc, setDoc] = useState<Doc>(initialDoc);

  const body = (
    <div className={s.container}>
      {editor !== null ? (
        <div className={s.toolbar}>
          <Toolbar
            {...{ editor, doc, setDoc }}
            {...{ layout, setLayout, settings, setSettings }}
          />
        </div>
      ) : null}
      <div className={s.body}>
        <Layout
          editor={<Editor {...{ settings, editor, setEditor }} />}
          preview={
            editor !== null ? <Preview {...{ editor, settings }} /> : null
          }
          layout={layout}
        />
      </div>
    </div>
  );

  return (
    <PromptProvider>
      <Tooltip.Provider>
        <AppTheme settings={settings} />
        {body}
      </Tooltip.Provider>
    </PromptProvider>
  );
};
