import { useEffect, useState } from "react";
import { DocState } from "~src/doc/type";
import { Editor } from "~src/editor/type";
import { LayoutState } from "~src/layout/type";
import { SettingsState } from "~src/settings/type";
import { ToolbarStack } from "./container/stack";
import { EditorHelp } from "./help";
import { EditorOpen } from "./open";
import { ToolbarPadMac } from "./pad/mac";
import { EditorPreview } from "./preview";
import { EditorSave } from "./save";
import { EditorSettings } from "./settings";
import * as s from "./toolbar.module.css";

interface Props extends SettingsState, LayoutState, DocState {
  editor: Editor;
}

/*
  useEffect(() => {
    const disposables: IDisposable[] = [];
    disposables.push(editor.onDidChangeModelContent(() => setShow(false)));
    disposables.push(editor.onDidFocusEditorText(() => setShow(false)));
    return () => {
      disposables.forEach((disposable) => disposable.dispose());
    };
  }, [editor]);
*/

const getTitle = (props: Props): string => {
  const { editor, doc } = props;
  // change in editor.getValue does not trigger re-render
  // const suffix = editor.getValue() === doc.content ? "*" : "";
  const title = [doc.name].join(" ");
  return title;
};

export const EditorToolbar = (props: Props): JSX.Element => {
  const { editor, doc, setDoc } = props;
  const { layout, setLayout, settings, setSettings } = props;

  return (
    <div
      className={[s.container, show ? s.show : s.hide].join(" ")}
      onMouseEnter={() => setShow(true)}
    >
      {layout !== "preview" ? (
        <div className={s.editor}>
          <ToolbarStack
            left={
              <>
                <ToolbarPadMac />
                <EditorOpen {...{ editor, doc, setDoc }} />
                <EditorSave {...{ editor, doc, setDoc }} />
              </>
            }
            center={<h1 className={s.title}>{getTitle(props)}</h1>}
            right={
              <>
                <EditorSettings {...{ settings, setSettings }} />
                <EditorPreview {...{ settings, layout, setLayout }} />
                <EditorHelp />
              </>
            }
          />
        </div>
      ) : null}
      {layout !== "editor" ? (
        <div className={s.preview}>
          <ToolbarStack
            left={
              <>
                <ToolbarPadMac />
                <EditorOpen {...{ editor, doc, setDoc }} />
                <EditorSave {...{ editor, doc, setDoc }} />
              </>
            }
            center={<h1 className={s.title}>{getTitle(props)}</h1>}
            right={
              <>
                <EditorSettings {...{ settings, setSettings }} />
                <EditorPreview {...{ settings, layout, setLayout }} />
                <EditorHelp />
              </>
            }
          />
        </div>
      ) : null}
    </div>
  );
};
