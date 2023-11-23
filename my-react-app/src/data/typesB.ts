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
    opacity: 100,
};

const textBlock: TextBlock = {
    id: "block1",
    point1: { x: 0, y: 0 },
    point2: { x: 10, y: 10 },
    type: "text",
    chars: [char1],
    chosenCharIds: ["char1"],
    alignment: 0,
    angelRotate: 30,
};

const circle: Ellipse = {
    id: "block2",
    point1: { x: 2, y: 12 },
    point2: { x: 12, y: 2 },
    angelRotate: 0,
    color: "FF0000",
    borderThickness: 2,
    colorBorder: "#A5A3A3",
    text: {
        id: "",
        point1: { x: 0, y: 0 },
        point2: { x: 1, y: 1 },
        type: "text",
        chars: [],
        chosenCharIds: [],
        alignment: 0,
        angelRotate: 0,
    },
    opacity: 100,
    type: "ellipse",
    radius: 5,
    centre: { x: 7, y: 7 },
};

const rectangle: Rectangle = {
    id: "block3",
    angelRotate: 0,
    color: "#4AE613",
    borderThickness: 2,
    colorBorder: "#A0A59E",
    text: {
        id: "i",
        type: "text",
        point1: { x: 20, y: 10 },
        point2: { x: 30, y: 0 },
        chars: [],
        chosenCharIds: [],
        alignment: 0,
        angelRotate: 0,
    },
    opacity: 100,
    point1: { x: 20, y: 10 },
    point2: { x: 30, y: 0 },
    type: "rectangle",
};

const equilTriangle: Triangle = {
    id: "block4",
    point1: { x: 0, y: 5 },
    point2: { x: 5, y: 0 },
    color: "",
    borderThickness: 1,
    colorBorder: "#000000",
    text: {
        id: "",
        type: "text",
        point1: { x: 1, y: 2 },
        point2: { x: 4, y: 1 },
        chars: [],
        chosenCharIds: [],
        alignment: 0,
        angelRotate: 0,
    },
    opacity: 100,
    angelRotate: 0,
    type: "Triangle",
    trianglePoint1: { x: 0, y: 0 },
    trianglePoint2: { x: 5, y: 0 },
    trianglePoint3: { x: 2.5, y: 4.33 },
};

const rightTriangle: Triangle = {
    id: "block5",
    point1: { x: 4, y: 8 },
    point2: { x: 6, y: 6 },
    angelRotate: 0,
    color: "#F3FF00",
    borderThickness: 3.5,
    colorBorder: "#F3FF00",
    text: {
        id: "",
        type: "text",
        point1: { x: 4, y: 7 },
        point2: { x: 5, y: 6 },
        chars: [],
        chosenCharIds: [],
        alignment: 0,
        angelRotate: 0,
    },
    opacity: 100,
    type: "Triangle",
    trianglePoint1: { x: 4, y: 6 },
    trianglePoint2: { x: 4, y: 8 },
    trianglePoint3: { x: 6, y: 6 },
};

const imageBlock: Image = {
    id: "block6",
    point1: { x: 100, y: 100 },
    point2: { x: 150, y: 125 },
    angelRotate: 0,
    type: "image",
    urlStr: "https://m.media-amazon.com/images/I/31enPn7dN+L.jpg",
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
};

const slide2: Slide = {
    id: "slide2",
    background: background, // вот так
    elements: [rightTriangle],
    chosenElements: ["block5"],
    transition: TransionType.Fading,
    animations: [],
};

const presentation0: Presentation = {
    height: 500,
    width: 600,
    versionId: "1",
    name: "React",
    slides: [slide1],
    chosenSlideIds: [],
};

const presentation1: Presentation = {
    height: 500,
    width: 600,
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
