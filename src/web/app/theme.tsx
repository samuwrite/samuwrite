import { Settings } from "../settings/type";
import { Roles, roles, variants } from "@rose-pine/palette";

interface Props {
  settings: Settings;
}

export const AppTheme = (props: Props): JSX.Element => {
  const { settings } = props;
  const variant = variants[settings.theme];
  const variables = Object.keys(variant).map((key) => {
    const role = key as keyof Roles<unknown, unknown>;
    const color = variant[role];
    return [
      `--color-${role}: ${color.hex};`,
      `--color-${role}-rgb: ${color.rgb.replace("rgb(", "").replace(")", "")};`,
    ].join("\n");
  });
  return <style>{`:root { ${variables.join("\n")} }`}</style>;
};
