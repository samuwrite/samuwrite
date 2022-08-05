import { Settings } from "../settings/type";
import { Layout, LayoutState } from "../layout/type";
import { getLayoutFromSettings } from "../settings/utils";

interface Props extends LayoutState {
  settings: Settings;
}

const getLayout = (props: Props): Layout => {
  const { layout, settings } = props;
  if (layout !== "editor") return "editor";
  return getLayoutFromSettings(settings.preview);
};

export const ToolbarPreview = (props: Props): JSX.Element => {
  const { layout, setLayout } = props;
  return (
    <button
      type="button"
      onClick={() => {
        setLayout(getLayout(props));
      }}
    >
      Preview {layout === "editor" ? "" : "x"}
    </button>
  );
};
