import {
	TextBlock,
	Ellipse,
	Rectangle,
	Triangle,
	Image,
	BackColor,
	Slide,
	Presentation,
	MainEditor,
	Background,
	Char,
	Animation,
	TypeAnimation,
	TransionType,
} from "../model/types";

const char1: Char = {
	id: "char1",
	value: "q",
	fontSize: 14,
	fontFamily: "Comic Sans MS",
	color: "#000000",
	bold: false,
	underlined: false,
	opacity: 1,
};

const textBlock: TextBlock = {
	id: "block1",
	point: { x: 0, y: 0 },
	width: 10,
	height: 10,
	type: "text",
	chars: [char1],
	chosenCharIds: ["char1"],
	alignment: 0,
	angleRotate: 30,
	opacity: 1,
};

const circle: Ellipse = {
	id: "block2",
	point: { x: 2, y: 12 },
	width: 10,
	height: 10,
	angleRotate: 0,
	color: "FF0000",
	borderThickness: 2,
	colorBorder: "#A5A3A3",
	opacity: 1,
	type: "ellipse",
	radius: 5,
	centre: { x: 7, y: 7 },
};

const rectangle: Rectangle = {
	id: "block3",
	angleRotate: 0,
	color: "#4AE613",
	borderThickness: 2,
	colorBorder: "#A0A59E",
	opacity: 1,
	point: { x: 20, y: 10 },
	width: 20,
	height: 20,
	type: "rectangle",
};

const equilTriangle: Triangle = {
	id: "block4",
	point: { x: 0, y: 5 },
	width: 5,
	height: 5,
	color: "",
	borderThickness: 1,
	colorBorder: "#000000",
	opacity: 1,
	angleRotate: 0,
	type: "triangle",
	trianglePoint1: { x: 0, y: 0 },
	trianglePoint2: { x: 5, y: 0 },
	trianglePoint3: { x: 2.5, y: 4.33 },
};

const rightTriangle: Triangle = {
	id: "block5",
	point: { x: 4, y: 8 },
	width: 5,
	height: 5,
	angleRotate: 0,
	color: "#F3FF00",
	borderThickness: 3.5,
	colorBorder: "#F3FF00",
	opacity: 1,
	type: "triangle",
	trianglePoint1: { x: 4, y: 6 },
	trianglePoint2: { x: 4, y: 8 },
	trianglePoint3: { x: 6, y: 6 },
};

const imageBlock: Image = {
	id: "block6",
	point: { x: 100, y: 100 },
	width: 100,
	height: 100,
	angleRotate: 0,
	type: "image",
	urlStr: "https://m.media-amazon.com/images/I/31enPn7dN+L.jpg",
	opacity: 1,
};

const backgroundColor: BackColor = {
	type: "backColor",
	color: "#699DF9",
};

const background: Background = {
	type: backgroundColor,
};

const block1Animation: Animation = {
	id: "anim1",
	blockId: "block1",
	animation: TypeAnimation.Moving,
};

const slide1: Slide = {
	id: "slide1",
	background: background, // вот так
	elements: [textBlock, circle, rectangle, rightTriangle, imageBlock],
	chosenElements: ["block6"],
	transition: TransionType.Default,
	animations: [block1Animation],
	width: 1262,
	height: 692,
};

const slide2: Slide = {
	id: "slide2",
	background: background, // вот так
	elements: [rightTriangle],
	chosenElements: ["block5"],
	transition: TransionType.Fading,
	animations: [],
	width: 1262,
	height: 692,
};

const presentation0: Presentation = {
	versionId: "1",
	name: "React",
	slides: [slide1],
	chosenSlideIds: [],
};

const presentation1: Presentation = {
	versionId: "1",
	name: "React",
	slides: [slide1, slide2],
	chosenSlideIds: ["slide2"],
};

const user: MainEditor = {
	presentation: presentation1,
	history: [presentation0, presentation1],
	viewingMode: "editor",
};
