import { Tooltip } from "@samuwrite/radix";
import { useState } from "react";
// import "~src/font/font.css";
import "./reset.css";
import * as s from "./root.css";
import { AppTheme } from "./theme";

/*
const initialDoc: Doc = {
  handle: null,
  name: "Untitled",
  content: "",
};
*/

export const AppRoot = (): JSX.Element => {
  /*
  const [layout, setLayout] = useState<LayoutType>("editor");
  const [editor, setEditor] = useState<EditorType | null>(null);
  const { setSettings, settings } = useSettingsState();
  const [doc, setDoc] = useState<Doc>(initialDoc);
  */

  /*
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
  */
  return <div className={s.container}>ahihi</div>;
};
