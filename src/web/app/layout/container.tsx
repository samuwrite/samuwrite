import { Preview } from "../preview/preview";
import { Layout } from "./type";
import * as s from "./container.module.css";
import { EditorMain } from "../editor/main";
import { EditorRef } from "../editor/type";

interface Props {
  layout: Layout;
  editorRef: EditorRef;
}

export const LayoutContainer = (props: Props): JSX.Element => {
  const { layout, editorRef } = props;
  return (
    <div className={s.container}>
      {/* Always render Editor to persist its state */}
      <div className={layout === "preview" ? s.hide : ""}>
        <EditorMain editorRef={editorRef} />
      </div>
      {/* Only render Preview when necessary to avoid re-calculating HTML
      unnecessarily */}
      {layout !== "editor" ? <Preview editorRef={editorRef} /> : null}
    </div>
  );
};
