import { IDisposable } from "monaco-editor";
import { useEffect, useState } from "react";
import { DocState } from "~src/doc/type";
import { Editor } from "~src/editor/type";
import { getHost } from "~src/host/get";
import { SettingsState } from "~src/settings/type";
import { ToolbarMenu } from "./menu";
import { ToolbarOpen } from "./open";
import { ToolbarPreview } from "./preview";
import { ToolbarSave } from "./save";
import { ToolbarSettings } from "./settings";
import * as s from "./toolbar.module.css";

interface Props extends SettingsState, LayoutState, DocState {
  editor: Editor;
}

const getTitle = (props: Props): string => {
  const { editor, doc } = props;
  // change in editor.getValue does not trigger re-render
  // const suffix = editor.getValue() === doc.content ? "*" : "";
  const title = [doc.name].join(" ");
  return title;
};

export const EditorToolbar = (props: Props): JSX.Element => {
  const { editor, doc, setDoc } = props;

  const [show, setShow] = useState(true);

  useEffect(() => {
    const disposables: IDisposable[] = [];
    disposables.push(editor.onDidChangeModelContent(() => setShow(false)));
    disposables.push(editor.onDidFocusEditorText(() => setShow(false)));
    return () => {
      disposables.forEach((disposable) => disposable.dispose());
    };
  }, [editor]);

  return (
    <div
      className={[s.container, show ? s.show : s.hide].join(" ")}
      onMouseEnter={() => setShow(true)}
    >
      <div className={s.left}>
        {getHost() === "mac" ? <div className={s.macPad} /> : null}
        <ToolbarOpen {...{ editor, doc, setDoc }} />
        <ToolbarSave {...{ editor, doc, setDoc }} />
      </div>
      <h1 className={s.title}>{getTitle(props)}</h1>
      <div className={s.right}>
        {/* <ToolbarPreview {...props} /> */}
        <ToolbarSettings {...props} />
        <ToolbarMenu />
      </div>
    </div>
  );
};
