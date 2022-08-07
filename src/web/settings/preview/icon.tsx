import { CodeIcon, LogIcon } from "@primer/octicons-react";
import { Settings } from "../type";
import * as s from "./icon.module.css";

interface Props {
  mode: Settings["preview"];
}

export const PreviewIcon = (props: Props): JSX.Element => {
  const { mode } = props;
  return (
    <div className={s.container}>
      {mode === "split" ? (
        <>
          <CodeIcon size={16} />
          <div className={s.line} />
        </>
      ) : null}
      <div className={s.preview}>
        <LogIcon size={16} />
      </div>
    </div>
  );
};
