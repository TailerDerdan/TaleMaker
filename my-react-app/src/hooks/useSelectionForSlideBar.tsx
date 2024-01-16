import { RefObject } from "react";

type useSelectionForSlideBarProps = {
	refOnParent: RefObject<HTMLDivElement>;
	refOnObject: RefObject<HTMLDivElement>;
	slideID: string;
	setDown: (slideID: string, isSelection: boolean) => void;
};

export function useSelectionForSlideBar(props: useSelectionForSlideBarProps) {
	const { refOnObject, setDown, slideID, refOnParent } = props;
	const item = refOnObject.current!;
	const parent = refOnParent.current!;
	const Selection = () => {
		item.removeEventListener("mousedown", Selection);
		setDown(slideID, true);
		const stopProp = (event: MouseEvent) => {
			event.stopPropagation();
		};
		const UnSelection = () => {
			setDown(slideID, false);
			parent.removeEventListener("mousedown", UnSelection);
			item.removeEventListener("mousedown", Selection);
			item.removeEventListener("mousedown", stopProp);
		};
		setTimeout(() => {
			parent.addEventListener("mousedown", UnSelection);
			item.removeEventListener("mousedown", Selection);
			item.addEventListener("mousedown", stopProp);
		}, 100);
		item.removeEventListener("mousedown", Selection);
		parent.removeEventListener("mousedown", UnSelection);
	};
	item.addEventListener("mousedown", Selection);
}
