type Char = {
    id: string;
    value: string;
    fontSize: number;
    fontFamily: string;
    color: string;
    bold: boolean;
    underlined: boolean;
    opacity: number;
};

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
    point1: Point;
    point2: Point;
    angelRotate: number;
};

type TextBlock = Block & {
    type: "text";
    chars: Array<Char>;
    chosenCharIds: Array<string>;
    alignment: Alignment;
};

type GraphicObject = Block & {
    color: string;
    borderThickness: number;
    colorBorder: string;
    text: TextBlock;
    opacity: number;
};

type Ellipse = GraphicObject & {
    type: "ellipse"; //как это рисовать то? Радиуса не достаточно
    radius: number;
    centre: Point;
};

type Rectangle = GraphicObject & {
    type: "rectangle";
};

type Triangle = GraphicObject & {
    type: "Triangle";
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

type BackColor = {
    type: "backColor";
    color: string;
};

type BackImage = {
    type: "backImage";
    urlStr: string;
};

type Background = {
    type: BackColor | BackImage;
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

type ObjectOnSlide = Rectangle | Triangle | TextBlock | Ellipse | Image | Video | Audio;

type Slide = {
    id: string;
    background: Background;
    elements: Array<ObjectOnSlide>;
    chosenElements: Array<string>;
    transition: TransionType;
    animations: Array<Animation>;
};

type Presentation = {
    width: number;
    height: number;
    versionId: string;
    name: string;
    slides: Array<Slide>;
    chosenSlideIds: Array<string>;
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
    BackColor,
    Slide,
    Presentation,
    MainEditor,
    Background,
    Char,
    Animation,
    Video,
    Audio,
    ObjectOnSlide,
};

export { Alignment, TransionType, TypeAnimation };
