import {
	Animation,
	Audio,
	Background,
	Ellipse,
	Image,
	MainEditor,
	Presentation,
	Rectangle,
	Slide,
	TextBlock,
	TransionType,
	Triangle,
	TypeAnimation,
	Video,
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
	id: "block2",
	point: { x: 2, y: 12 },
	width: 25,
	height: 25,
	angleRotate: 0,
	color: "FF0000",
	borderThickness: 2,
	colorBorder: "#A5A3A3",
	opacity: 1,
	type: "ellipse",
	radiusX: 5,
	radiusY: 5,
	centre: { x: 7, y: 7 },
	isSelection: false,
};

const rectangle: Rectangle = {
	id: "block3",
	angleRotate: 0,
	color: "#4AE613",
	borderThickness: 2,
	colorBorder: "#A0A59E",
	opacity: 1,
	point: { x: 20, y: 10 },
	width: 10,
	height: 150,
	type: "rectangle",
	isSelection: false,
};

const equilTriangle: Triangle = {
	id: "block4",
	point: { x: 0, y: 5 },
	width: 0,
	height: 0,
	color: "#B8A74B",
	borderThickness: 1,
	colorBorder: "#000000",
	opacity: 1,
	angleRotate: 0,
	type: "triangle",
	trianglePoint1: { x: 0, y: 0 },
	trianglePoint2: { x: 5, y: 0 },
	trianglePoint3: { x: 2.5, y: 4.33 },
	isSelection: false,
};

const rightTriangle: Triangle = {
	id: "block5",
	point: { x: 250, y: 50 },
	width: 344,
	height: 243,
	angleRotate: 0,
	color: "#F3FF00",
	borderThickness: 3.5,
	colorBorder: "#F3FF00",
	opacity: 1,
	type: "triangle",
	trianglePoint1: { x: 256, y: 293 },
	trianglePoint2: { x: 400, y: 130 },
	trianglePoint3: { x: 600, y: 50 },
	isSelection: false,
};

const imageBlock: Image = {
	id: "block6",
	point: { x: 100, y: 100 },
	width: 100,
	height: 100,
	angleRotate: 0,
	type: "image",
	urlStr: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png",
	opacity: 1,
	isSelection: false,
};

const audioBlock: Audio = {
	id: "block6",
	point: { x: 150, y: 125 },
	width: 100,
	height: 100,
	angleRotate: 0,
	type: "audio",
	urlStr: "https://freesound.org/people/InspectorJ/sounds/405561/",
	opacity: 1,
	isSelection: false,
};

const videoBlock: Video = {
	id: "block7",
	point: { x: 200, y: 175 },
	width: 100,
	height: 100,
	angleRotate: 0,
	type: "video",
	urlStr: "https://clck.ru/3vyXS",
	opacity: 1,
	isSelection: false,
};

const block1Animation: Animation = {
	id: "anim1",
	blockId: "block1",
	animation: TypeAnimation.Moving,
};

const block2Animtion: Animation = {
	id: "anim2",
	blockId: "block2",
	animation: TypeAnimation.Appearing,
};

const slide1: Slide = {
	id: "slide1",
	background: "#699DF9", // вот так
	typeBackground: Background.Color,
	elements: [imageBlock],
	chosenElements: ["block6"],
	transition: TransionType.Default,
	animations: [block1Animation],
	width: 0.66,
	height: 0.64,
	mainSlideID: "slide1",
};

const slide2: Slide = {
	id: "slide2",
	background: "#699DF9", // вот так
	typeBackground: Background.Color, // вот так
	elements: [rightTriangle, textBlock, circle, rectangle],
	chosenElements: ["block5"],
	transition: TransionType.Fading,
	animations: [block2Animtion],
	width: 0.66,
	height: 0.64,
	mainSlideID: "slide1",
};

const presentation0: Presentation = {
	versionId: "1",
	name: "React",
	slides: [slide1],
	chosenSlideIds: ["slide1"],
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

export {
	user,
	textBlock,
	circle,
	rectangle,
	rightTriangle,
	imageBlock,
	presentation1,
};
