import { variants } from "@rose-pine/palette";
import { Settings } from "../type";
import * as s from "./icon.module.css";

interface Props {
  theme: Settings["theme"];
}

export const ThemeIcon = (props: Props): JSX.Element => {
  const { theme } = props;
  const variant = variants[theme];

  return (
    <span className={s.container} style={{ backgroundColor: variant.base.hex }}>
      <svg width="24" height="24" viewBox="0 0 198 187">
        <path
          fill={variant.pine.hex}
          fillOpacity="0.5"
          d="M98.983 151.358C94.184 139.832 84.279 130.579 71.287 127.098L14.941 112C7.79401 138.673 23.623 206.09 50.296 173.237L90.543 184.021C93.382 184.782 96.27 183.981 98.298 182.146C100.3 184.672 103.68 185.909 106.99 185.021L147.237 174.237C173.911 167.09 189.74 139.673 182.593 113L126.247 128.098C113.632 131.478 103.928 140.298 98.983 151.358Z"
        />
        <path
          fill={variant.pine.hex}
          d="M99 177.001C94.368 154.178 74.19 137 50 137H0C0 164.614 22.386 187 50 187H98H100H148C175.614 187 198 164.614 198 137H148C123.81 137 103.632 154.178 99 177.001Z"
        />
        <path
          fill={variant.rose.hex}
          d="M95.918 0C105.118 5.312 111.991 13.106 116.181 22.048C128.154 12.575 144.298 8.68599 160.178 12.941L147.237 61.237C142.474 79.013 128.709 91.973 112.16 96.525L112.178 96.593C107.805 97.765 103.411 98.319 99.09 98.309C94.768 98.319 90.374 97.765 86 96.593L86.018 96.525C69.47 91.973 55.704 79.013 50.941 61.237L38 12.941C54.262 8.58399 70.801 12.766 82.853 22.74C83.217 22.036 83.599 21.336 84 20.642L95.918 0Z"
        />
      </svg>
    </span>
  );
};
