import { RefObject } from "react";
import { Point } from "../model/types";

export type useDraggableWorkFieldProps = {
	refInitialOnObject: RefObject<HTMLDivElement>;
	widthSlide: number;
	heightSlide: number;
	coords: Point;
	setCoords: (slideID: string, blockID: string, coords: Point) => void;
	blockID: string;
	slideID: string;
	refObject: RefObject<HTMLDivElement>;
};

function useDragAndDrop(props: useDraggableWorkFieldProps) {
	const {
		refInitialOnObject,
		setCoords,
		blockID,
		coords,
		widthSlide,
		heightSlide,
		slideID,
		refObject,
	} = props;
	const initialItem: HTMLDivElement = refInitialOnObject.current!;
	const draggableItem: HTMLDivElement = refObject.current!;
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
			if (
				newPos.x >
				widthSlide - initialItem.getBoundingClientRect().width
			) {
				newPos.x =
					widthSlide - initialItem.getBoundingClientRect().width;
			}
			if (newPos.y < 0) newPos.y = 0;
			if (
				newPos.y >
				heightSlide - initialItem.getBoundingClientRect().height
			) {
				newPos.y =
					heightSlide - initialItem.getBoundingClientRect().height;
			}

			initialItem.style.zIndex = "1";
			initialItem.style.top = `${newPos.y}px`;
			initialItem.style.left = `${newPos.x}px`;
		};
		const OnMouseUp = (eventUp: MouseEvent) => {
			initialItem.style.zIndex = "";
			window.removeEventListener("mouseup", OnMouseUp);
			window.removeEventListener("mousemove", OnMouseMove);
			draggableItem?.removeEventListener("mousedown", OnMouseDown);
			const newPos: Point = {
				x: eventUp.pageX - startCoords.x + coords.x,
				y: eventUp.pageY - startCoords.y + coords.y,
			};

			if (newPos.x < 0) newPos.x = 0;
			if (
				newPos.x >
				widthSlide - initialItem.getBoundingClientRect().width
			) {
				newPos.x =
					widthSlide - initialItem.getBoundingClientRect().width;
			}
			if (newPos.y < 0) newPos.y = 0;
			if (
				newPos.y >
				heightSlide - initialItem.getBoundingClientRect().height
			) {
				newPos.y =
					heightSlide - initialItem.getBoundingClientRect().height;
			}

			setCoords(slideID, blockID, {
				x: newPos.x,
				y: newPos.y,
			});
		};
		window.addEventListener("mousemove", OnMouseMove);
		window.addEventListener("mouseup", OnMouseUp);
	};
	draggableItem?.addEventListener("mousedown", OnMouseDown);
	return () => draggableItem?.removeEventListener("mousedown", OnMouseDown);
}

export { useDragAndDrop };
