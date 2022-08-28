import { Editor } from "../editor/type";
import { Settings } from "../settings/type";
import { TemplateContainer } from "../template/template";
import { usePreviewHtml } from "./html";

interface Props {
  editor: Editor;
  settings: Settings;
}

export const Preview = (props: Props): JSX.Element => {
  const { editor, settings } = props;

  const html = usePreviewHtml({ editor });
  return (
    <TemplateContainer template={settings.template}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TemplateContainer>
  );
};
