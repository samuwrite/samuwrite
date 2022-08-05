import { EditorRef } from "../editor/type";
import { usePreviewHtml } from "./html";

interface Props {
  editorRef: EditorRef;
}

export const Preview = (props: Props): JSX.Element => {
  const { editorRef } = props;
  const html = usePreviewHtml({ editorRef });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
