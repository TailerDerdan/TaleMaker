import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";
import {
	useDragAndDrop,
	useDraggableWorkFieldProps,
} from "../hooks/useDragAndDrop";

type EllipseProps = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	color: string;
	borderThickness: number;
	colorBorder: string;
	opacity: number;
	radius: number;
	centre: Point;
	widthSlide: number;
	heightSlide: number;
};

const EllipseView = (props: EllipseProps) => {
	const {
		id,
		angleRotate,
		color,
		borderThickness,
		colorBorder,
		opacity,
		radius,
		centre,
		widthSlide,
		heightSlide,
	} = props;
	const [width] = useState<number>(radius * 2 + 10);
	const [height] = useState<number>(radius * 2 + 10);
	const [xPoint] = useState<number>(centre.x - radius);
	const [yPoint] = useState<number>(centre.y - radius);

	props.point.x = xPoint;
	props.point.y = yPoint;
	const { point } = props;

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
			key={id}
			ref={refObject}
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
			<svg
				style={{
					width: width,
					height: height,
					opacity: opacity,
				}}
			>
				<circle
					cx={centre.x}
					cy={centre.y}
					r={radius}
					style={{
						fill: color,
						strokeWidth: borderThickness,
						stroke: colorBorder,
					}}
				></circle>
			</svg>
		</div>
	);
};

export { EllipseView };
