import { Toolbar } from "~src/toolbar/toolbar";
import { ToolbarState } from "~src/toolbar/type";

interface Props extends ToolbarState {}

export const EditorToolbar = (props: Props): JSX.Element => {
  const { toolbar, setToolbar } = props;
  return (
    <Toolbar
      left={<div>left</div>}
      right={<div>right</div>}
      center={<div>center</div>}
      {...{ toolbar, setToolbar }}
    />
  );
};
