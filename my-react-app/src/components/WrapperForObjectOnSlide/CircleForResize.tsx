import React, { RefObject, useEffect, useRef, useState } from "react";
import { useResize } from "../../hooks/useResize";
import { Point } from "../../model/types";

export type CircleForResizeProps = {
	locationOnObject: string;
	leftObject: number;
	topObject: number;
	widthObject: number;
	heightObject: number;
	widthSlide: number;
	heightSlide: number;
	refOnResizeable: RefObject<HTMLDivElement>;
};
export const CircleForResize = (props: CircleForResizeProps) => {
	const {
		locationOnObject,
		leftObject,
		topObject,
		heightObject,
		widthObject,
		refOnResizeable,
		widthSlide,
		heightSlide,
	} = props;

	const ref = useRef<HTMLDivElement>(null);
	const DrawParameters = {
		cx: 0,
		cy: 0,
		radius: 5.5,
		color: "#7D426E",
	};

	switch (locationOnObject) {
		case "left-top":
			DrawParameters.cx = leftObject;
			DrawParameters.cy = topObject;
			break;
		case "left-middle":
			DrawParameters.cx = leftObject;
			DrawParameters.cy = topObject + heightObject / 2;
			break;
		case "left-bottom":
			DrawParameters.cx = leftObject;
			DrawParameters.cy = topObject + heightObject;
			break;
		case "middle-top":
			DrawParameters.cx = leftObject + widthObject / 2;
			DrawParameters.cy = topObject;
			break;
		case "middle-bottom":
			DrawParameters.cx = leftObject + widthObject / 2;
			DrawParameters.cy = topObject + heightObject;
			break;
		case "right-top":
			DrawParameters.cx = leftObject + widthObject;
			DrawParameters.cy = topObject;
			break;
		case "right-middle":
			DrawParameters.cx = leftObject + widthObject;
			DrawParameters.cy = topObject + heightObject / 2;
			break;
		case "right-bottom":
			DrawParameters.cx = leftObject + widthObject;
			DrawParameters.cy = topObject + heightObject;
			break;
	}
	const [coords, setCoords] = useState<Point>({
		x: DrawParameters.cx,
		y: DrawParameters.cy,
	});

	useEffect(() => {
		useResize({
			leftObject,
			topObject,
			widthObject,
			heightObject,
			refOnResizeable,
			refOnObject: ref,
			widthSlide,
			heightSlide,
			coords,
			setCoords,
			locationOnObject,
		});
	}, [coords]);

	return (
		<div
			ref={ref}
			style={{
				position: "absolute",
				width: DrawParameters.radius * 2,
				height: DrawParameters.radius * 2,
			}}
		>
			<svg
				width={DrawParameters.radius * 2}
				height={DrawParameters.radius * 2}
			>
				<circle
					cx={coords.x}
					cy={coords.y}
					r={DrawParameters.radius}
					style={{ fill: DrawParameters.color }}
				></circle>
			</svg>
		</div>
	);
};
