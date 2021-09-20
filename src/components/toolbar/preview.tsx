import { TippyProps } from "@tippyjs/react";
import { VscBook } from "react-icons/vsc";
import { Button } from "~/src/components/button/button";
import { ButtonMoreItem } from "~/src/components/button/more/menu";
import { PrefsState } from "../prefs/state";
import { SHORTCUTS } from "~src/components/toolbar/shortcuts";
import { useShortcut } from "~src/components/shortcut/use-shortcut";
import { useCallback } from "react";
import { vote } from "~src/utils/vote";

interface Props {
	singleton: TippyProps["singleton"];
	prefs: PrefsState;
}

const print = (_props: Props): ButtonMoreItem => ({
	action: () => vote(86),
	label: "Print…",
	shortcut: SHORTCUTS.print,
});

export const ToolbarPreview = (props: Props): JSX.Element => {
	const { setPreviewVisible } = props.prefs;

	const toggle = useCallback(() => {
		setPreviewVisible((visible) => !visible);
	}, [setPreviewVisible]);

	useShortcut(SHORTCUTS.preview, toggle);

	return (
		<Button
			onClick={toggle}
			Icon={VscBook}
			shortcut={SHORTCUTS.preview}
			tooltip="Toggle Preview"
			tooltipSingleton={props.singleton}
			more={[print(props)]}
			selected={props.prefs.previewVisible}
		/>
	);
};
