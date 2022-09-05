import * as Radix from "@radix-ui/react-alert-dialog";
import { Card } from "../card/card";
import * as s from "./dialog.module.css";

interface Button {
  label: string;
  onClick?: () => void;
}

export type { Button as AlertDialogContentButton };

interface Props {
  title: string;
  description: string;
  cancel?: Button;
  action?: Button;
  content?: Radix.AlertDialogContentProps;
}

export type { Props as AlertDialogContentProps };

const Content = (props: Props): JSX.Element => {
  const { title, description, cancel, action, content } = props;
  return (
    <Radix.Portal>
      <Radix.Overlay className={s.overlay} />
      <Radix.Content className={[s.content, Card.glass].join(" ")} {...content}>
        <Radix.Title className={s.title}>{title}</Radix.Title>
        <Radix.Description className={s.description}>
          {description}
        </Radix.Description>
        {cancel ? (
          <Radix.Cancel className={s.cancel} onClick={cancel.onClick}>
            {cancel.label}
          </Radix.Cancel>
        ) : null}
        {action ? (
          <Radix.Action className={s.action} onClick={action.onClick}>
            {action.label}
          </Radix.Action>
        ) : null}
      </Radix.Content>
    </Radix.Portal>
  );
};

export const AlertDialog = {
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Content,
};
