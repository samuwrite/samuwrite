import { Editor } from "../editor/type";
import { usePreviewHtml } from "./html";

interface Props {
  editor: Editor;
}

export const Preview = (props: Props): JSX.Element => {
  const { editor } = props;
  const html = usePreviewHtml({ editor });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
