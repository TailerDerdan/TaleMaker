import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";

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
	} = props;

	return (
		<svg
			style={{
				width: "100%",
				height: "100%",
				opacity: opacity,
			}}
		>
			<rect
				width={"100%"}
				height={"100%"}
				style={{
					fill: color,
					strokeWidth: borderThickness,
					stroke: colorBorder,
				}}
			></rect>
		</svg>
	);
};

export { RectangleView };
