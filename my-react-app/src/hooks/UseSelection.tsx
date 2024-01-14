import { RefObject, useEffect } from "react";

type useSelectionProps = {
	refOnObject: RefObject<HTMLDivElement>;
	blockID: string;
	slideID: string;
	setDown: (slideID: string, blockID: string, isSelection: boolean) => void;
};

export function useSelection(props: useSelectionProps) {
	const { refOnObject, setDown, slideID, blockID } = props;
	const item = refOnObject.current!;
	const Selection = () => {
		item.removeEventListener("mousedown", Selection);
		setDown(slideID, blockID, true);
		const stopProp = (event: MouseEvent) => {
			event.stopPropagation();
		};
		const UnSelection = () => {
			setDown(slideID, blockID, false);
			item?.parentElement?.removeEventListener("mousedown", UnSelection);
			item.removeEventListener("mousedown", Selection);
			item.removeEventListener("mousedown", stopProp);
		};
		setTimeout(() => {
			item?.parentElement?.addEventListener("mousedown", UnSelection);
			item.removeEventListener("mousedown", Selection);
			item.addEventListener("mousedown", stopProp);
		}, 100);
		item.removeEventListener("mousedown", Selection);
		item?.parentElement?.removeEventListener("mousedown", UnSelection);
	};
	item.addEventListener("mousedown", Selection);
}
