import {
  offset,
  shift,
  size,
  SizeOptions,
  useFloating as useLibFloating,
  UseFloatingReturn,
} from "@floating-ui/react-dom";

const sizeApply: SizeOptions["apply"] = (params) => {
  const { elements, availableHeight, availableWidth } = params;
  const { style } = elements.floating;
  style.setProperty("--max-width", `${availableWidth}px`);
  style.setProperty("--max-height", `${availableHeight}px`);
};

export const useFloating = (): UseFloatingReturn => {
  const float = useLibFloating({
    middleware: [
      offset(6),
      shift({ padding: 6 }),
      size({ apply: sizeApply, padding: 6 }),
    ],
  });
  return float;
};
