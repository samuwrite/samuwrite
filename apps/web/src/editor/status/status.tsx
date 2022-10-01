import { RefObject } from "react";
import * as s from "./status.css";

interface Props {
  statusRef: RefObject<HTMLDivElement>;
}

export const EditorStatus = (props: Props): JSX.Element => {
  const { statusRef } = props;
  return <div className={s.container} ref={statusRef} />;
};
