import { Menu } from "@headlessui/react";
import { ReactNode } from "react";
import * as s from "./link.module.css";

interface Props {
  href: string;
  children: ReactNode;
}

export const MenuLink = (props: Props): JSX.Element => {
  const { children, href } = props;
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          className={[s.container, active ? s.active : ""].join(" ")}
          href={href}
          target="_blank"
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};
