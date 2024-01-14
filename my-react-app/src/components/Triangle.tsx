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
		width,
		height,
	} = props;
	const points = `${width / 2}, 0 0, ${height} ${width}, ${height}`;

	return (
		<svg style={{ width: "100%", height: "100%", opacity: opacity }}>
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
