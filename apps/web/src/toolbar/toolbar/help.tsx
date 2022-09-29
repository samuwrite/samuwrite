import { QuestionIcon } from "@primer/octicons-react";
import { useState } from "react";
import { Dropdown } from "~src/dropdown/dropdown";
import { Link } from "~src/link/link";
import { ToolbarButton } from "~src/toolbar/button/button";
import { Tooltip } from "~src/tooltip/tooltip";

export const EditorHelp = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <Tooltip content="Help">
        <Dropdown.Trigger asChild>
          <ToolbarButton Icon={QuestionIcon} label="Help" selected={open} />
        </Dropdown.Trigger>
      </Tooltip>
      <Dropdown.Portal>
        <Dropdown.Content>
          <Dropdown.Item asChild>
            <Link href="https://github.com/thien-do/samuwrite.com">GitHub</Link>
          </Dropdown.Item>
          <Dropdown.Item asChild>
            <Link href="https://twitter.com/_thiendo">Twitter</Link>
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item asChild>
            <Link href="https://github.com/thien-do/samuwrite.com/issues/new">
              Support
            </Link>
          </Dropdown.Item>
          <Dropdown.Item asChild>
            <Link href="https://thien-do.memos.pub/samuwrite.com/docs/privacy.md">
              Privacy Policy
            </Link>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
