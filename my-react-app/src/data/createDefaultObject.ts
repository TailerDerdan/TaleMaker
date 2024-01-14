import {
	Alignment,
	Background,
	Ellipse,
	Image,
	Rectangle,
	Slide,
	TextBlock,
	TransionType,
	Triangle,
} from "../model/types";
import { generateID } from "../components/generateID/generateID";

function CalculateCountOfObject(slides: Slide[], typeObject: string) {
	let countOfObject = 0;
	for (const slide of slides) {
		if (slide.id == slide.mainSlideID) {
			for (const elem of slide.elements) {
				if (elem.type == typeObject) countOfObject++;
			}
			break;
		}
	}
	return countOfObject;
}

function CreateDefaultSlide(slides: Slide[]) {
	const id = generateID({
		typeOfObject: "slide",
		countOfObject: slides.length,
	});
	const defaultSlide: Slide = {
		mainSlideID: slides.length == 0 ? id : slides[0].mainSlideID,
		typeBackground: Background.Color,
		background: "#699DF9",
		id: id,
		elements: [],
		chosenElements: [],
		transition: TransionType.Default,
		width: 0.66 * document.documentElement.clientWidth,
		height: 0.64 * document.documentElement.clientHeight,
	};
	return defaultSlide;
}

function CreateDefaultTextBlock(slides: Slide[]) {
	const countOfTextBlock = CalculateCountOfObject(slides, "text");
	const defaultBlock: TextBlock = {
		type: "text",
		id: generateID({
			typeOfObject: "text",
			countOfObject: countOfTextBlock,
		}),
		point: { x: 20, y: 20 },
		width: 150,
		height: 50,
		angleRotate: 0,
		opacity: 1,
		isSelection: true,
		value: "",
		fontSize: 14,
		fontFamily: "Comic Sans",
		color: "#000",
		bold: false,
		underlined: false,
		chosenCharIds: [],
		alignment: 0,
	};
	return defaultBlock;
}

function CreateDefaultImageBlock(slides: Slide[], urlStr: string) {
	const countOfImageBlock = CalculateCountOfObject(slides, "image");
	const defaultBlock: Image = {
		type: "image",
		id: generateID({
			typeOfObject: "image",
			countOfObject: countOfImageBlock,
		}),
		point: { x: 20, y: 20 },
		width: 200,
		height: 200,
		angleRotate: 0,
		opacity: 1,
		isSelection: false,
		urlStr: urlStr,
	};
	return defaultBlock;
}

function CreateDefaultEllipseBlock(slides: Slide[]) {
	const countOfEllipse = CalculateCountOfObject(slides, "ellipse");
	const defaultBlock: Ellipse = {
		type: "ellipse",
		id: generateID({
			typeOfObject: "ellipse",
			countOfObject: countOfEllipse,
		}),
		point: { x: 20, y: 20 },
		width: 100,
		height: 100,
		angleRotate: 0,
		opacity: 1,
		isSelection: false,
		color: "#000",
		borderThickness: 1,
		colorBorder: "#000",
		radiusY: 100,
		radiusX: 100,
		centre: { x: 70, y: 70 },
	};
	return defaultBlock;
}

function CreateDefaultRectangleBlock(slides: Slide[]) {
	const countOfRectangle = CalculateCountOfObject(slides, "rectangle");
	const defaultBlock: Rectangle = {
		type: "rectangle",
		id: generateID({
			typeOfObject: "rectangle",
			countOfObject: countOfRectangle,
		}),
		point: { x: 20, y: 20 },
		width: 100,
		height: 100,
		angleRotate: 0,
		opacity: 1,
		isSelection: false,
		color: "#000",
		borderThickness: 1,
		colorBorder: "#000",
	};
	return defaultBlock;
}

function CreateDefaultTriangleBlock(slides: Slide[]) {
	const countOfRectangle = CalculateCountOfObject(slides, "triangle");
	const defaultBlock: Triangle = {
		type: "triangle",
		id: generateID({
			typeOfObject: "triangle",
			countOfObject: countOfRectangle,
		}),
		point: { x: 20, y: 20 },
		width: 100,
		height: 100,
		angleRotate: 0,
		opacity: 1,
		isSelection: false,
		color: "#000",
		borderThickness: 1,
		colorBorder: "#000",
		trianglePoint1: { x: 70, y: 0 },
		trianglePoint2: { x: 0, y: 120 },
		trianglePoint3: { x: 120, y: 120 },
	};
	return defaultBlock;
}

export {
	CreateDefaultSlide,
	CreateDefaultTextBlock,
	CreateDefaultImageBlock,
	CreateDefaultRectangleBlock,
	CreateDefaultEllipseBlock,
	CreateDefaultTriangleBlock,
};
