enum Alignment {
	Without,
	Left,
	Centre,
	Right,
}

type Point = {
	x: number;
	y: number;
};

type Block = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	opacity: number;
	isSelection: boolean;
};

type TextBlock = Block & {
	type: "text";
	value: string;
	fontSize: number;
	fontFamily: string;
	color: string;
	bold: boolean;
	underlined: boolean;
	chosenCharIds: Array<string>;
	alignment: Alignment;
};

type GraphicObject = Block & {
	color: string;
	borderThickness: number;
	colorBorder: string;
};

type Ellipse = GraphicObject & {
	type: "ellipse";
	radiusX: number;
	centre: Point;
	radiusY: number;
};

type Rectangle = GraphicObject & {
	type: "rectangle";
};

type Triangle = GraphicObject & {
	type: "triangle";
	trianglePoint1: Point;
	trianglePoint2: Point;
	trianglePoint3: Point;
};

type Image = Block & {
	type: "image";
	urlStr: string;
};

type Video = Block & {
	type: "video";
	urlStr: string;
};

type Audio = Block & {
	type: "audio";
	urlStr: string;
};

enum TransionType {
	Default,
	Fading,
	Scrolling,
}

enum TypeAnimation {
	Moving = 0,
	Appearing,
}

type Animation = {
	id: string;
	blockId: string;
	animation: TypeAnimation;
};

type ObjectOnSlide =
	| Rectangle
	| Triangle
	| TextBlock
	| Ellipse
	| Image
	| Video
	| Audio;

enum Background {
	Image = "image",
	Color = "color",
}

type Slide = {
	id: string;
	background: string;
	typeBackground: Background;
	elements: Array<ObjectOnSlide>;
	chosenElements: Array<string>;
	transition: TransionType;
	animations?: Array<Animation>;
	width: number;
	height: number;
	isSelection: boolean;
};

type Presentation = {
	versionId: string;
	name: string;
	slides: Array<Slide>;
	chosenSlideIds: Array<string>;
	mainSlideID: string;
};

type MainEditor = {
	presentation: Presentation;
	history: Array<Presentation>;
	viewingMode: "editor" | "slideShow";
};

export type {
	TextBlock,
	Ellipse,
	Rectangle,
	Triangle,
	Image,
	Slide,
	Presentation,
	MainEditor,
	Animation,
	Video,
	Audio,
	ObjectOnSlide,
	Point,
	Block,
};

export { Alignment, TransionType, TypeAnimation, Background };
