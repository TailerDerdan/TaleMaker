import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";
import {
	useDragAndDrop,
	useDraggableWorkFieldProps,
} from "../hooks/useDragAndDrop";

type ImageProps = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	urlStr: string;
	widthSlide: number;
	heightSlide: number;
};

const ImageView = (props: ImageProps) => {
	const {
		urlStr,
		id,
		angleRotate,
		point,
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
			style={{
				position: "absolute",
				top: `${coords.y}px`,
				left: `${coords.x}px`,
				transform: `rotate(${angleRotate})`,
			}}
			key={id}
		>
			<img
				src={urlStr}
				alt={urlStr}
				key={id}
				width={width}
				height={height}
			/>
		</div>
	);
};

export { ImageView };
