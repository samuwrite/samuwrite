import { Settings } from "../settings/type";
import { variants } from "@rose-pine/palette";

interface Props {
  settings: Settings;
}

interface ThemeExtra {
  shadowOpacity: number;
  blurOpacity: number;
}

const EXTRAS: Record<Settings["theme"], ThemeExtra> = {
  dawn: {
    blurOpacity: 0.7,
    shadowOpacity: 0.05,
  },
  main: {
    blurOpacity: 0.9,
    shadowOpacity: 0.3,
  },
  moon: {
    blurOpacity: 0.9,
    shadowOpacity: 0.15,
  },
};

export const AppTheme = (props: Props): JSX.Element => {
  const { settings } = props;
  const variant = variants[settings.theme];
  const variables: string[] = [];

  // Theme colors
  Object.keys(variant.colors).map((key) => {
    const role = key as keyof typeof variant.colors;
    const {hex, rgb} = variant.colors[role];
    variables.push(`--color-${role}: #${hex}`);
    // RGB parts for alpha mixing
    variables.push(`--color-${role}-rgb: ${rgb.join(", ")}`);
  });

  // Other theme details like shadow opacity (dark themes need stronger shadow
  // than light themes)
  const extra = EXTRAS[settings.theme];
  variables.push(`--shadow-opacity: ${extra.shadowOpacity}`);
  variables.push(`--blur-opacity: ${extra.blurOpacity}`);

  return <style>{`:root { ${variables.join(";")} }`}</style>;
};
