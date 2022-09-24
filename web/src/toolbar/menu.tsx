import { ThreeBarsIcon } from "@primer/octicons-react";
import { useState } from "react";
import { Dropdown } from "../dropdown/dropdown";
import { Link } from "../link/link";
import { Tooltip } from "../tooltip/tooltip";
import { ToolbarButton } from "./button/button";

export const ToolbarMenu = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <Tooltip content="Menu">
        <Dropdown.Trigger asChild>
          <ToolbarButton Icon={ThreeBarsIcon} label="Menu" selected={open} />
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
