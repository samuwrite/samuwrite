import { ReactNode } from "react";
import * as s from "./layout.module.css";
import { Layout as LayoutType } from "./type";

interface Props {
  layout: LayoutType;
  editor: ReactNode;
  preview: ReactNode;
}

export const Layout = (props: Props): JSX.Element => {
  const { layout, editor, preview } = props;
  return (
    <div className={s.container}>
      {/* Always render Editor to persist its state */}
      <div className={[layout === "preview" ? s.hide : "", s.editor].join(" ")}>
        {editor}
      </div>
      {/* Only render Preview when necessary to avoid re-calculating HTML
      unnecessarily */}
      {layout !== "editor" && preview !== null ? (
        <div className={s.preview}>{preview}</div>
      ) : null}
    </div>
  );
};
