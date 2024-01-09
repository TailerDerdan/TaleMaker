import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";

type TriangleProps = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	color: string;
	borderThickness: number;
	colorBorder: string;
	opacity: number;
	trianglePoint1: Point;
	trianglePoint2: Point;
	trianglePoint3: Point;
};

const TriangleView = (props: TriangleProps) => {
	// console.log(refObject);
	const {
		id,
		angleRotate,
		color,
		borderThickness,
		colorBorder,
		opacity,
		trianglePoint1,
		trianglePoint2,
		trianglePoint3,
	} = props;
	const [width] = useState<number>(
		Math.max(trianglePoint1.x, trianglePoint2.x, trianglePoint3.x) -
			Math.min(trianglePoint1.x, trianglePoint2.x, trianglePoint3.x) +
			5,
	);
	const [height] = useState<number>(
		Math.max(trianglePoint1.y, trianglePoint2.y, trianglePoint3.y) -
			Math.min(trianglePoint1.y, trianglePoint2.y, trianglePoint3.y) +
			5,
	);
	props.point.x = Math.min(
		trianglePoint1.x,
		trianglePoint2.x,
		trianglePoint3.x,
	);
	props.point.y = Math.min(
		trianglePoint1.y,
		trianglePoint2.y,
		trianglePoint3.y,
	);
	const { point } = props;
	const points = `${trianglePoint1.x - point.x}, ${
		trianglePoint1.y - point.y
	} ${trianglePoint2.x - point.x}, ${trianglePoint2.y - point.y} ${
		trianglePoint3.x - point.x
	}, ${trianglePoint3.y - point.y}`;

	return (
		<svg style={{ width: width, height: height, opacity: opacity }}>
			<polygon
				points={points}
				style={{
					fill: color,
					strokeWidth: borderThickness,
					stroke: colorBorder,
				}}
			></polygon>
		</svg>
	);
};

export { TriangleView };
