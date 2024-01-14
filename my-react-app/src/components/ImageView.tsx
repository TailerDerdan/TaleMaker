import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";

type ImageProps = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	urlStr: string;
};

const ImageView = (props: ImageProps) => {
	const { urlStr, id, angleRotate, point, width, height } = props;

	return (
		<img
			style={{ userSelect: "none" }}
			src={urlStr}
			alt={urlStr}
			key={id}
			width={width}
			height={height}
			draggable={false}
		/>
	);
};

export { ImageView };
