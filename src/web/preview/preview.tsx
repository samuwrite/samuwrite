import { Editor } from "../editor/type";
import { usePreviewHtml } from "./html";
import { PREVIEW_TEMPLATE_DETAILS } from "./template/state";
import { PreviewTemplateState } from "./template/state";
interface Props {
  editor: Editor;
  prefs: PreviewTemplateState; // { previewTemplate: "tailwind" | "github" | "serif", setPreviewTemplate: setState }
}

export const Preview = (props: Props): JSX.Element => {
  const { editor, prefs } = props;
  // template as a setting
  // const template = PREVIEW_TEMPLATE_DETAILS[props.prefs.previewTemplate];

  // tailwind template
  const tailwindTemplate = PREVIEW_TEMPLATE_DETAILS["tailwind"];

  const html = usePreviewHtml({ editor });
  return (
    <div
      className={tailwindTemplate.className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
