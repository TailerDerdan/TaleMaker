import { RefObject } from "react";
import { isDown } from "../components/WrapperForObjectOnSlide/Wrapper";

type useSelectionProps = {
	refOnObject: RefObject<HTMLDivElement>;
	setDown: (isDown: isDown) => void;
};

export function useSelection(props: useSelectionProps) {
	const { refOnObject, setDown } = props;
	const item = refOnObject.current!;
	const Selection = () => {
		item.style.border = "4px solid rgba(125, 66, 110, 0.7)";
		setDown({ isDown: true });
		const UnSelection = () => {
			setDown({ isDown: false });
			item.style.border = "";
			item?.parentElement?.removeEventListener("mousedown", UnSelection);
			item.removeEventListener("mousedown", Selection);
		};
		setTimeout(() => {
			item?.parentElement?.addEventListener("mousedown", UnSelection);
			item.removeEventListener("mousedown", Selection);
		}, 1);
		item.removeEventListener("mousedown", Selection);
	};
	item.addEventListener("mousedown", Selection);
}
