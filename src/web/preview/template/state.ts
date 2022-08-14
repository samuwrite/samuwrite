import { SetState } from "../../utils/state/type";
import * as styles from "./styles/styles";

export const PREVIEW_TEMPLATE_NAMES = ["tailwind"] as const;

export type PreviewTemplateName = typeof PREVIEW_TEMPLATE_NAMES[number];

export interface PreviewTemplateDetail {
  name: string;
  className: string;
}

export interface PreviewTemplateState {
  previewTemplate: PreviewTemplateName;
  setPreviewTemplate: SetState<PreviewTemplateName>;
}
export const PREVIEW_TEMPLATE_DETAILS: Record<
  PreviewTemplateName,
  PreviewTemplateDetail
> = {
  tailwind: {
    name: `Tailwind`,
    className: styles.tailwind.container,
  },
};
