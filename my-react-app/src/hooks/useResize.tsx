import { MutableRefObject, Ref, RefObject, useEffect, useRef } from "react";
import { ObjectOnSlide, Point } from "../model/types";
import { log } from "node:util";

export type useResizeProps = {
	refOnObject: RefObject<HTMLDivElement>;
	refOnResizeable: RefObject<HTMLDivElement>;
	widthSlide: number;
	heightSlide: number;
	locationOnObject: string;
	coordsObject: Point;
	coordsCircle: Point;
	radiusCircle: number;
	widthObject: number;
	heightObject: number;
	blockResizeableID: string;
	blockCircleID: string;
	setWidth: (slideID: string, blockID: string, width: number) => void;
	setHeight: (slideID: string, blockID: string, height: number) => void;
	setCoords: (slideID: string, blockID: string, coords: Point) => void;
	slideID: string;
	topObject: number;
	leftObject: number;
	setSelection: (
		slideID: string,
		blockID: string,
		isSelection: boolean,
	) => void;
};

function useResize(props: useResizeProps) {
	const {
		refOnObject,
		setCoords,
		coordsCircle,
		coordsObject,
		radiusCircle,
		locationOnObject,
		widthSlide,
		heightSlide,
		refOnResizeable,
		setWidth,
		setHeight,
		blockResizeableID,
		blockCircleID,
		slideID,
		widthObject,
		heightObject,
		topObject,
		leftObject,
		setSelection,
	} = props;
	const item: HTMLDivElement = refOnObject.current!;
	const objectOnSlideRef: HTMLDivElement = refOnResizeable.current!;

	useEffect(() => {
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
					x: coordsCircle.x + delta.x,
					y: coordsCircle.y + delta.y,
				};
				if (newPos.x < 0) newPos.x = 0;
				if (
					newPos.x >
					widthSlide - item.getBoundingClientRect().width
				) {
					newPos.x = widthSlide - item.getBoundingClientRect().width;
				}
				if (newPos.y < 0) newPos.y = 0;
				if (
					newPos.y >
					heightSlide - item.getBoundingClientRect().height
				) {
					newPos.y =
						heightSlide - item.getBoundingClientRect().height;
				}

				item.style.zIndex = "2";
				setSelection(slideID, blockResizeableID, false);
				switch (locationOnObject) {
					case "left-top":
						item.style.top = `${newPos.y}px`;
						item.style.left = `${newPos.x}px`;
						objectOnSlideRef.style.top = `${
							delta.y + coordsObject.y
						}px`;
						objectOnSlideRef.style.left = `${
							delta.x + coordsObject.x
						}px`;
						objectOnSlideRef.style.width = `${
							-delta.x + widthObject
						}px`;
						objectOnSlideRef.style.height = `${
							-delta.y + heightObject
						}px`;
						break;
					case "left-middle":
						objectOnSlideRef.style.left = `${
							delta.x + coordsObject.x
						}px`;
						objectOnSlideRef.style.width = `${
							-delta.x + widthObject
						}px`;
						break;
					case "left-bottom":
						item.style.top = `${newPos.y}px`;
						item.style.left = `${newPos.x}px`;
						objectOnSlideRef.style.left = `${
							delta.x + coordsObject.x
						}px`;
						objectOnSlideRef.style.width = `${
							-delta.x + widthObject
						}px`;
						objectOnSlideRef.style.height = `${
							delta.y + heightObject
						}px`;
						break;
					case "middle-top":
						item.style.top = `${newPos.y}px`;
						item.style.left = `${newPos.x}px`;
						objectOnSlideRef.style.top = `${
							delta.y + coordsObject.y
						}px`;
						objectOnSlideRef.style.height = `${
							-delta.y + heightObject
						}px`;
						break;
					case "middle-bottom":
						item.style.top = `${newPos.y}px`;
						item.style.left = `${newPos.x}px`;
						objectOnSlideRef.style.height = `${
							delta.y + heightObject
						}px`;
						break;
					case "right-top":
						item.style.top = `${newPos.y}px`;
						item.style.left = `${newPos.x}px`;
						objectOnSlideRef.style.top = `${
							delta.y + coordsObject.y
						}px`;
						objectOnSlideRef.style.height = `${
							-delta.y + heightObject
						}px`;
						objectOnSlideRef.style.width = `${
							delta.x + widthObject
						}px`;
						break;
					case "right-middle":
						item.style.top = `${newPos.y}px`;
						item.style.left = `${newPos.x}px`;
						objectOnSlideRef.style.width = `${
							delta.x + widthObject
						}px`;
						break;
					case "right-bottom":
						item.style.top = `${newPos.y}px`;
						item.style.left = `${newPos.x}px`;
						objectOnSlideRef.style.width = `${
							delta.x + widthObject
						}px`;
						objectOnSlideRef.style.height = `${
							delta.y + heightObject
						}px`;
						break;
					default:
						break;
				}
			};
			const OnMouseUp = (eventUp: MouseEvent) => {
				item.style.zIndex = "";
				window.removeEventListener("mouseup", OnMouseUp);
				window.removeEventListener("mousemove", OnMouseMove);
				item?.removeEventListener("mousedown", OnMouseDown);

				const newPos: Point = {
					x: eventUp.pageX - startCoords.x + coordsCircle.x,
					y: eventUp.pageY - startCoords.y + coordsCircle.y,
				};

				if (newPos.x < 0) newPos.x = 0;
				if (
					newPos.x >
					widthSlide - item.getBoundingClientRect().width
				) {
					newPos.x = widthSlide - item.getBoundingClientRect().width;
				}
				if (newPos.y < 0) newPos.y = 0;
				if (
					newPos.y >
					heightSlide - item.getBoundingClientRect().height
				) {
					newPos.y =
						heightSlide - item.getBoundingClientRect().height;
				}

				const CoordsForObject: Point = {
					x: eventUp.pageX - eventDown.pageX,
					y: eventUp.pageY - eventDown.pageY,
				};

				const PhysicalParametersOfObject = {
					width: widthObject,
					height: heightObject,
					top: topObject,
					left: leftObject,
				};

				switch (locationOnObject) {
					case "left-top":
						PhysicalParametersOfObject.top =
							CoordsForObject.y + coordsObject.y;
						PhysicalParametersOfObject.left =
							CoordsForObject.x + coordsObject.x;

						PhysicalParametersOfObject.width =
							-CoordsForObject.x + widthObject;

						PhysicalParametersOfObject.height =
							-CoordsForObject.y + heightObject;
						break;
					case "left-middle":
						PhysicalParametersOfObject.left =
							CoordsForObject.x + coordsObject.x;
						PhysicalParametersOfObject.width =
							-CoordsForObject.x + widthObject;
						break;
					case "left-bottom":
						PhysicalParametersOfObject.left =
							CoordsForObject.x + coordsObject.x;

						PhysicalParametersOfObject.width =
							-CoordsForObject.x + widthObject;

						PhysicalParametersOfObject.height =
							CoordsForObject.y + heightObject;

						break;
					case "middle-top":
						PhysicalParametersOfObject.top =
							CoordsForObject.y + coordsObject.y;

						PhysicalParametersOfObject.height =
							-CoordsForObject.y + heightObject;

						break;
					case "middle-bottom":
						PhysicalParametersOfObject.height =
							CoordsForObject.y + heightObject;

						break;
					case "right-top":
						PhysicalParametersOfObject.top =
							CoordsForObject.y + coordsObject.y;
						PhysicalParametersOfObject.height =
							-CoordsForObject.y + heightObject;
						PhysicalParametersOfObject.width =
							CoordsForObject.x + widthObject;
						break;
					case "right-middle":
						PhysicalParametersOfObject.width =
							CoordsForObject.x + widthObject;
						break;
					case "right-bottom":
						PhysicalParametersOfObject.width =
							CoordsForObject.x + widthObject;

						PhysicalParametersOfObject.height =
							CoordsForObject.y + heightObject;

						break;
					default:
						break;
				}
				console.log(PhysicalParametersOfObject);
				setCoords(slideID, blockCircleID, { x: newPos.x, y: newPos.y });
				setCoords(slideID, blockResizeableID, {
					x: PhysicalParametersOfObject.left,
					y: PhysicalParametersOfObject.top,
				});
				setWidth(
					slideID,
					blockResizeableID,
					PhysicalParametersOfObject.width,
				);
				setHeight(
					slideID,
					blockResizeableID,
					PhysicalParametersOfObject.height,
				);
				setSelection(slideID, blockResizeableID, true);
			};

			window.addEventListener("mousemove", OnMouseMove);
			window.addEventListener("mouseup", OnMouseUp);
		};
		item?.addEventListener("mousedown", OnMouseDown);
		return () => item?.removeEventListener("mousedown", OnMouseDown);
	}, [topObject, leftObject]);
}

export { useResize };
