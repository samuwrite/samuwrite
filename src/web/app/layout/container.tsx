import { Editor } from "../editor/editor";
import { Preview } from "../preview/preview";
import { Layout } from "./type";
import * as s from "./container.module.css";

interface Props {
  layout: Layout;
}

export const LayoutContainer = (props: Props): JSX.Element => {
  const { layout } = props;
  return (
    <div className={s.container}>
      {/* Always render Editor to persist its state */}
      <div className={layout === "preview" ? s.hide : ""}>
        <Editor />
      </div>
      {/* Only render Preview when necessary to avoid re-calculating HTML
      unnecessarily */}
      {layout !== "editor" ? <Preview /> : null}
    </div>
  );
};
