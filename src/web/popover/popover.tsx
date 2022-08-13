import {
  shift,
  offset,
  size,
  SizeOptions,
  useFloating,
} from "@floating-ui/react-dom";
import { Popover as LibPopover } from "@headlessui/react";
import { PopoverPanel } from "../popover/panel";

interface Props {
  button: (props: { open: boolean }) => JSX.Element;
  panel: () => JSX.Element;
}

const sizeApply: SizeOptions["apply"] = (params) => {
  const { elements, availableHeight, availableWidth } = params;
  const { style } = elements.floating;
  style.setProperty("--max-width", `${availableWidth}px`);
  style.setProperty("--max-height", `${availableHeight}px`);
};

export const Popover = (props: Props): JSX.Element => {
  const { button, panel } = props;

  const float = useFloating({
    middleware: [
      offset(6),
      shift({ padding: 6 }),
      size({ apply: sizeApply, padding: 6 }),
    ],
  });

  return (
    <LibPopover>
      <LibPopover.Button ref={float.reference} as="div">
        {button}
      </LibPopover.Button>
      <PopoverPanel float={float}>{panel}</PopoverPanel>
    </LibPopover>
  );
};
