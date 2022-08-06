import { Settings } from "../settings/type";
import { Roles, roles, variants } from "@rose-pine/palette";

console.log({ roles, variants });

interface Props {
  settings: Settings;
}

export const AppTheme = (props: Props): JSX.Element => {
  const { settings } = props;
  const variant = variants[settings.theme];
  const variables = Object.keys(variant).map((key) => {
    const role = key as keyof Roles<unknown, unknown>;
    const color = variant[role];
    return `--color-${role}: ${color.hex};`;
  });
  return <style>{`:root { ${variables.join("\n")} }`}</style>;
};
