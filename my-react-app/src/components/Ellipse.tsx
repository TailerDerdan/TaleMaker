import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";

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
	radiusX: number;
	radiusY: number;
	centre: Point;
};

const EllipseView = (props: EllipseProps) => {
	const {
		id,
		angleRotate,
		width,
		height,
		color,
		borderThickness,
		colorBorder,
		opacity,
		radiusX,
		radiusY,
		centre,
	} = props;

	return (
		<svg
			style={{
				width: "100%",
				height: "100%",
				opacity: opacity,
			}}
		>
			<ellipse
				cx={"50%"}
				cy={"50%"}
				rx={"50%"}
				ry={"50%"}
				style={{
					fill: color,
					strokeWidth: borderThickness,
					stroke: colorBorder,
				}}
			></ellipse>
		</svg>
	);
};

export { EllipseView };
