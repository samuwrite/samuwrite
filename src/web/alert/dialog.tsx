import * as Radix from "@radix-ui/react-alert-dialog";
import { Card } from "../card/card";
import { patch } from "../utils/patch";
import * as s from "./dialog.module.css";

const Content = (props: Radix.AlertDialogContentProps): JSX.Element => {
  const { children, ...contentProps } = props;
  return (
    <Radix.Portal>
      <Radix.Overlay className={s.overlay} />
      <Radix.Content
        className={[s.content, Card.glass].join(" ")}
        {...contentProps}
      >
        {children}
      </Radix.Content>
    </Radix.Portal>
  );
};

export const AlertDialog = {
  Root: Radix.Root,
  Trigger: Radix.Trigger,
  Title: patch(Radix.Title, { className: s.title }),
  Description: patch(Radix.Description, { className: s.description }),
  Action: patch(Radix.Action, { className: s.action }),
  Cancel: patch(Radix.Cancel, { className: s.cancel }),
  Content,
};
