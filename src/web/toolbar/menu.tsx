import { ThreeBarsIcon } from "@primer/octicons-react";
import { MenuDivider } from "../menu/divider";
import { MenuLink } from "../menu/link";
import { Menu } from "../menu/menu";
import { ToolbarButton } from "./button/button";

export const ToolbarMenu = (): JSX.Element => {
  return (
    <Menu
      button={({ open }) => (
        <ToolbarButton Icon={ThreeBarsIcon} label="Menu" selected={open} />
      )}
    >
      <MenuLink href="https://github.com/thien-do/rosepine.dev">
        GitHub
      </MenuLink>
      <MenuLink href="https://twitter.com/_thiendo">Twitter</MenuLink>
      <MenuDivider />
      <MenuLink href="https://github.com/thien-do/rosepine.dev/issues/new">
        Support
      </MenuLink>
      <MenuLink href="https://docs.rosepine.dev/docs/privacy.md">
        Privacy Policy
      </MenuLink>
    </Menu>
  );
};
