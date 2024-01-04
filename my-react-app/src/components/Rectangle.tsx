import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";
import {
	useDragAndDrop,
	useDraggableWorkFieldProps,
} from "../hooks/useDragAndDrop";

type RectangleProps = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	color: string;
	borderThickness: number;
	colorBorder: string;
	opacity: number;
	widthSlide: number;
	heightSlide: number;
};

const RectangleView = (props: RectangleProps) => {
	const {
		id,
		point,
		angleRotate,
		color,
		borderThickness,
		colorBorder,
		opacity,
		width,
		height,
		widthSlide,
		heightSlide,
	} = props;

	const [coords, setCoords] = useState<Point>(point);
	const refObject = useRef<HTMLDivElement>(null);

	const propsForDragAndDrop: useDraggableWorkFieldProps = {
		refOnObject: refObject,
		setCoords,
		widthSlide,
		heightSlide,
		coords,
	};
	useEffect(() => {
		useDragAndDrop(propsForDragAndDrop);
	}, [coords]);

	return (
		<div
			ref={refObject}
			key={id}
			style={{
				position: "absolute",
				top: `${coords.y}px`,
				left: `${coords.x}px`,
				width: width,
				height: height,
				transform: `rotate(${angleRotate})`,
				opacity: opacity,
			}}
		>
			<svg style={{ width: width, height: height, opacity: opacity }}>
				<rect
					style={{
						fill: color,
						strokeWidth: borderThickness,
						stroke: colorBorder,
						width: width,
						height: height,
					}}
				></rect>
			</svg>
		</div>
	);
};

export { RectangleView };
