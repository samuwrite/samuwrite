import { forwardRef, ReactNode, Ref } from "react";
import { getHost } from "~src/app/host/get";
import { postMacMessage } from "~src/app/host/mac";

interface Props {
  href: string;
  children: ReactNode;
}

const MacLink = forwardRef<HTMLButtonElement, Props>(
  (props, ref): JSX.Element => {
    const { children, href, ...rest } = props;
    return (
      <button
        {...rest}
        onClick={async () => {
          await postMacMessage("openUrl", { url: href });
        }}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

const WebLink = forwardRef<HTMLAnchorElement, Props>(
  (props, ref): JSX.Element => {
    const { children, href, ...rest } = props;
    return (
      <a {...rest} href={href} target="_blank" ref={ref}>
        {children}
      </a>
    );
  }
);

export const Link = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (props, ref): JSX.Element => {
    switch (getHost()) {
      case "mac":
        return <MacLink {...props} ref={ref as Ref<HTMLButtonElement>} />;
      case "web":
        return <WebLink {...props} ref={ref as Ref<HTMLAnchorElement>} />;
    }
  }
);
