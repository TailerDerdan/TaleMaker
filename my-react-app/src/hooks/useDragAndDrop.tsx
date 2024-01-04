import { RefObject } from "react";
import { Point } from "../model/types";

export type useDraggableWorkFieldProps = {
	refOnObject: RefObject<HTMLDivElement>;
	widthSlide: number;
	heightSlide: number;
	coords: Point;
	setCoords: (coords: Point) => void;
};

function useDragAndDrop(props: useDraggableWorkFieldProps) {
	const { refOnObject, setCoords, coords, widthSlide, heightSlide } = props;
	const item: HTMLDivElement = refOnObject.current!;
	const OnMouseDown = (eventDown: MouseEvent) => {
		const startCoords: Point = {
			x: eventDown.pageX,
			y: eventDown.pageY,
		};

		const OnMouseMove = (eventMove: MouseEvent) => {
			const delta: Point = {
				x: eventMove.pageX - startCoords.x,
				y: eventMove.pageY - startCoords.y,
			};
			const newPos: Point = {
				x: coords.x + delta.x,
				y: coords.y + delta.y,
			};
			if (newPos.x < 0) newPos.x = 0;
			if (newPos.x > widthSlide - item.getBoundingClientRect().width) {
				newPos.x = widthSlide - item.getBoundingClientRect().width;
			}
			if (newPos.y < 0) newPos.y = 0;
			if (newPos.y > heightSlide - item.getBoundingClientRect().height) {
				newPos.y = heightSlide - item.getBoundingClientRect().height;
			}

			item.style.zIndex = "1";
			item.style.top = `${newPos.y}px`;
			item.style.left = `${newPos.x}px`;
		};
		const OnMouseUp = (eventUp: MouseEvent) => {
			item.style.zIndex = "";
			window.removeEventListener("mouseup", OnMouseUp);
			window.removeEventListener("mousemove", OnMouseMove);
			item?.removeEventListener("mousedown", OnMouseDown);
			setCoords({
				x: eventUp.pageX - startCoords.x + coords.x,
				y: eventUp.pageY - startCoords.y + coords.y,
			});
		};

		window.addEventListener("mousemove", OnMouseMove);
		window.addEventListener("mouseup", OnMouseUp);
	};
	item?.addEventListener("mousedown", OnMouseDown);
	return () => item?.removeEventListener("mousedown", OnMouseDown);
}

export { useDragAndDrop };
