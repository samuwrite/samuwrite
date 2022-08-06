import { Settings } from "../settings/type";
import { DEFAULT_THEME_DETAIL, THEME_DETAILS } from "./details";
import { ThemeDetail } from "./type";

interface Props {
  id: Settings["theme"];
}

const getOthers = ({ scheme }: ThemeDetail): string => `
--shadow-opacity: ${scheme === "light" ? "0.05" : "0.2"};
--border-inset: 0 0 0 1px ${scheme === "light" ? "white inset" : "black"};
`;

const getColors = ({ colors }: ThemeDetail): string => {
  const variables: string[] = Object.entries(colors).map((entry) => {
    const [key, color] = entry;
    return `--${key}-color: ${color};`;
  });
  return variables.join("\n");
};

export const ThemeInject = (props: Props): JSX.Element => {
  const { id } = props;
  const detail = THEME_DETAILS.get(id) ?? DEFAULT_THEME_DETAIL;
  return (
    <style>{`:root {
  ${getColors(detail)}
  ${getOthers(detail)}
}`}</style>
  );
};
