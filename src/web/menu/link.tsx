import { Menu } from "@headlessui/react";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export const MenuLink = (props: Props): JSX.Element => {
  const { children, href } = props;
  return (
    <Menu.Item>
      {({ active }) => (
        <a href={href} target="_blank">
          {children}
          {active ? "active" : ""}
        </a>
      )}
    </Menu.Item>
  );
};
