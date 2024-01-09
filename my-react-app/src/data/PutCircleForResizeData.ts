import { Ellipse } from "../model/types";

type TCircleForResize = Ellipse & {
	locationOnObject: string;
};

const CircleLeftTop: TCircleForResize = {
	id: "circleForResize-left-top",
	point: { x: -5.5, y: -5.5 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 0, y: 0 },
	isSelection: false,
	locationOnObject: "left-top",
};

const CircleLeftMiddle: TCircleForResize = {
	id: "circleForResize-left-middle",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "left-middle",
};

const CircleLeftBottom: TCircleForResize = {
	id: "circleForResize-left-bottom",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "left-bottom",
};

const CircleMiddleTop: TCircleForResize = {
	id: "circleForResize-middle-top",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "middle-top",
};

const CircleMiddleBottom: TCircleForResize = {
	id: "circleForResize-middle-bottom",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "middle-bottom",
};

const CircleRightTop: TCircleForResize = {
	id: "circleForResize-right-top",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "right-top",
};

const CircleRightMiddle: TCircleForResize = {
	id: "circleForResize-right-middle",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "right-middle",
};

const CircleRightBottom: TCircleForResize = {
	id: "circleForResize-right-bottom",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "right-bottom",
};

const CircleForRotate: TCircleForResize = {
	id: "circleForResize-rotate",
	point: { x: 2, y: 12 },
	width: 11,
	height: 11,
	angleRotate: 0,
	color: "#7D426E",
	borderThickness: 0,
	colorBorder: "#000",
	opacity: 1,
	type: "ellipse",
	radiusX: 5.5,
	radiusY: 5.5,
	centre: { x: 7, y: 7 },
	isSelection: false,
	locationOnObject: "rotate",
};

export function AddData(circlesForResize: TCircleForResize[]) {
	circlesForResize.push(CircleLeftTop);
	circlesForResize.push(CircleLeftMiddle);
	circlesForResize.push(CircleLeftBottom);
	circlesForResize.push(CircleMiddleTop);
	circlesForResize.push(CircleMiddleBottom);
	circlesForResize.push(CircleRightTop);
	circlesForResize.push(CircleRightMiddle);
	circlesForResize.push(CircleRightBottom);
	circlesForResize.push(CircleForRotate);
}

export type { TCircleForResize };
