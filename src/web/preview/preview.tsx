import { Editor } from "../editor/type";
import { Settings } from "../settings/type";
import { TemplateContainer } from "../template/template";
import { usePreviewHtml } from "./html";
import * as s from "./preview.module.css";
import * as sCard from "../card/card.module.css";
import { Scroll } from "../scroll/scroll";
import { usePreviewScroll } from "./state/scroll";

interface Props {
  editor: Editor;
  settings: Settings;
}

export const Preview = (props: Props): JSX.Element => {
  const { editor, settings } = props;
  const html = usePreviewHtml({ editor });

  usePreviewScroll({ editor });

  return (
    <Scroll>
      <div className={s.container}>
        <div className={[s.card, sCard.solid].join(" ")}>
          <TemplateContainer template={settings.template}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </TemplateContainer>
        </div>
      </div>
    </Scroll>
  );
};
