import {
	TextBlock,
	Ellipse,
	Rectangle,
	Triangle,
	Image,
	Slide,
	Presentation,
	MainEditor,
	Background,
} from "../model/types";

const textBlock: TextBlock = {
	id: "block1",
	point: { x: 0, y: 0 },
	width: 40,
	height: 40,
	type: "text",
	value: "qswe",
	fontSize: 16,
	fontFamily: "Comic Sans",
	color: "#891231",
	bold: false,
	underlined: false,
	chosenCharIds: ["char1"],
	alignment: 0,
	angleRotate: 30,
	opacity: 1,
	isSelection: false,
};

const circle: Ellipse = {
	id: "id2",
	point: { x: 2, y: 12 },
	width: 10,
	height: 10,
	color: "FF0000",
	borderThickness: 2,
	colorBorder: "#A5A3A3",
	opacity: 1,
	angleRotate: 0,
	type: "ellipse",
	radiusX: 5,
	radiusY: 5,
	centre: { x: 7, y: 7 },
	isSelection: false,
};

const rectangle: Rectangle = {
	id: "id3",
	color: "#4AE613",
	borderThickness: 2,
	colorBorder: "#A0A59E",
	opacity: 1,
	angleRotate: 0,
	point: { x: 20, y: 10 },
	width: 10,
	height: 20,
	type: "rectangle",
	isSelection: false,
};

const equilTriangle: Triangle = {
	id: "id4",
	point: { x: 0, y: 5 },
	width: 5,
	height: 5,
	angleRotate: 0,
	color: "",
	borderThickness: 1,
	colorBorder: "#000000",
	opacity: 1,
	type: "triangle",
	trianglePoint1: { x: 0, y: 0 },
	trianglePoint2: { x: 5, y: 0 },
	trianglePoint3: { x: 2.5, y: 4.33 },
	isSelection: false,
};

const rightTriangle: Triangle = {
	id: "id5",
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
	isSelection: false,
};

const imageBlock: Image = {
	id: "id6",
	point: { x: 100, y: 100 },
	width: 100,
	height: 100,
	angleRotate: 0,
	type: "image",
	urlStr: "https://m.media-amazon.com/images/I/31enPn7dN+L.jpg",
	opacity: 1,
	isSelection: false,
};

const slide1: Slide = {
	mainSlideID: "slide1",
	id: "slide1",
	background: "#699DF9",
	typeBackground: Background.Color,
	elements: [],
	chosenElements: [],
	transition: 0,
	animations: [],
	width: 1262,
	height: 692,
};

const presentation: Presentation = {
	versionId: "0",
	name: "React",
	slides: [],
	chosenSlideIds: [],
};

const user: MainEditor = {
	presentation: presentation,
	history: [],
	viewingMode: "editor",
};
