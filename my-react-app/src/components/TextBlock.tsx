import React, { useState } from "react";
import { Point, Char, Alignment } from "../model/types";

type TextBlockViewProps = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	chars: Array<Char>;
	chosenCharIds: Array<string>;
	alignment: Alignment;
};

function TextBlockView(props: TextBlockViewProps) {
	const {
		id,
		point,
		angleRotate,
		chars,
		chosenCharIds,
		alignment,
		width,
		height,
	} = props;

	const spanArr = chars.map((ch) => {
		return (
			<span
				key={ch.id}
				style={{
					fontFamily: `${ch.fontFamily}`,
					fontSize: ch.fontSize,
					color: `${ch.color}`,
					textDecoration: ch.underlined ? "underline" : "none",
					opacity: ch.opacity,
					fontWeight: ch.bold ? 5 : 0,
				}}
			>
				{ch.value}
			</span>
		);
	});

	return (
		<div
			key={id}
			style={{
				display: "inline-block",
				width: width,
				height: height,
				position: "absolute",
				top: point.y,
				left: point.x,
				transform: `rotate(${angleRotate})`,
			}}
		>
			{spanArr}
		</div>
	);
}

export { TextBlockView };
