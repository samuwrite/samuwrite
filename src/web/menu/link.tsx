import { Menu } from "@headlessui/react";
import { ReactNode } from "react";
import { postMacMessage } from "../host/mac";
import * as s from "./link.module.css";

interface Props {
  href: string;
  children: ReactNode;
}

export const MenuLink = (props: Props): JSX.Element => {
  const { children, href } = props;

  const render = ({ active }: { active: boolean }): JSX.Element => {
    const isMac = (window as any).webkit !== undefined;
    const className = [s.container, active ? s.active : ""].join(" ");

    return isMac ? (
      <button
        onClick={async () => {
          await postMacMessage("openUrl", { url: href });
        }}
        className={className}
      >
        {children}
      </button>
    ) : (
      <a className={className} href={href} target="_blank">
        {children}
      </a>
    );
  };

  return <Menu.Item>{render}</Menu.Item>;
};
