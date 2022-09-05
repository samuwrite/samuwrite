import * as Radix from "@radix-ui/react-alert-dialog";
import { ReactNode } from "react";
import { animation } from "../animation/animation";
import { Card } from "../card/card";
import * as s from "./dialog.module.css";

interface Props {
  title: string;
  description: string;
  buttons: ReactNode;
}

export type { Props as PromptDialogContentProps };

const Content = (props: Props): JSX.Element => {
  const { title, description, buttons } = props;
  return (
    <Radix.Portal>
      <Radix.Overlay
        className={[s.overlay, animation.fade].join(" ")}
      ></Radix.Overlay>
      {/* Container to apply transform animation to Content */}
      <div className={s.container}>
        <Radix.Content
          className={[s.content, Card.glass, animation.flip].join(" ")}
        >
          <Radix.Title className={s.title}>{title}</Radix.Title>
          <Radix.Description className={s.description}>
            {description}
          </Radix.Description>
          <div className={s.footer}>{buttons}</div>
        </Radix.Content>
      </div>
    </Radix.Portal>
  );
};

export const PromptDialog = {
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Content,
  Action: Radix.Action,
  Cancel: Radix.Cancel,
};
