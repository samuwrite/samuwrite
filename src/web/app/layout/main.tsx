import { Preview } from "../preview/preview";
import { Layout } from "./type";
import * as s from "./main.module.css";
import { EditorMain } from "../editor/main";

interface Props {
  layout: Layout;
}

export const LayoutMain = (props: Props): JSX.Element => {
  const { layout } = props;
  return (
    <div className={s.container}>
      {/* Always render Editor to persist its state */}
      <div className={layout === "preview" ? s.hide : ""}>
        <EditorMain />
      </div>
      {/* Only render Preview when necessary to avoid re-calculating HTML
      unnecessarily */}
      {layout !== "editor" ? <Preview /> : null}
    </div>
  );
};
