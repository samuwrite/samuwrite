import { DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { LayoutState } from "../layout/type";
import { SettingsState } from "../settings/type";
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

export const Toolbar = (props: Props): JSX.Element => {
  const { editor, doc, setDoc } = props;
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.macPad} />
        <ToolbarOpen {...{ editor, doc, setDoc }} />
        <ToolbarSave {...{ editor, doc, setDoc }} />
      </div>
      <h1 className={s.title}>{getTitle(props)}</h1>
      <div className={s.right}>
        <ToolbarPreview {...props} />
        <ToolbarSettings {...props} />
        <ToolbarMenu />
      </div>
    </div>
  );
};
