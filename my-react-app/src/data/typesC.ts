import {
    TextBlock,
    Ellipse,
    Rectangle,
    Triangle,
    Image,
    Video,
    Audio,
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

const char2: Char = {
    id: "char2",
    value: "w",
    fontSize: 14,
    fontFamily: "Comic Sans MS",
    color: "#000000",
    bold: false,
    underlined: false,
    opacity: 100,
};

const char3: Char = {
    id: "char3",
    value: "w",
    fontSize: 20,
    fontFamily: "Comic Sans MS",
    color: "#000000",
    bold: true,
    underlined: false,
    opacity: 100,
};

const char4: Char = {
    id: "char4",
    value: "w",
    fontSize: 20,
    fontFamily: "Comic Sans MS",
    color: "#000000",
    bold: false,
    underlined: true,
    opacity: 100,
};

const textBlock: TextBlock = {
    id: "block1",
    point: { x: 0, y: 0 },
    width: 20,
    height: 20,
    type: "text",
    chars: [char1, char2, char3],
    chosenCharIds: ["char1"],
    alignment: 0,
    angleRotate: 30,
};

const circle: Ellipse = {
    id: "block2",
    point: { x: 2, y: 12 },
    angleRotate: 0,
    color: "FF0000",
    borderThickness: 2,
    colorBorder: "#A5A3A3",
    text: {
        id: "block2text",
        point: { x: 0, y: 0 },
        width: 2,
        height: 2,
        type: "text",
        chars: [char2],
        chosenCharIds: ["char2"],
        alignment: 0,
        angleRotate: 0,
    },
    opacity: 100,
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
    text: {
        id: "block3text",
        type: "text",
        point: { x: 20, y: 10 },
        width: 8,
        height: 148,
        chars: [char1, char2],
        chosenCharIds: ["char1"],
        alignment: 0,
        angleRotate: 0,
    },
    opacity: 100,
    point: { x: 20, y: 10 },
    width: 10,
    height: 150,
    type: "rectangle",
};

const equilTriangle: Triangle = {
    id: "block4",
    point: { x: 0, y: 5 },
    color: "#B8A74B",
    borderThickness: 1,
    colorBorder: "#000000",
    text: {
        id: "block4text",
        type: "text",
        point: { x: 1, y: 2 },
        width: 5,
        height: 7,
        chars: [char3],
        chosenCharIds: ["char3"],
        alignment: 0,
        angleRotate: 0,
    },
    opacity: 100,
    angleRotate: 0,
    type: "triangle",
    trianglePoint1: { x: 0, y: 0 },
    trianglePoint2: { x: 5, y: 0 },
    trianglePoint3: { x: 2.5, y: 4.33 },
};

const rightTriangle: Triangle = {
    id: "block5",
    point: { x: 4, y: 8 },
    angleRotate: 0,
    color: "#F3FF00",
    borderThickness: 3.5,
    colorBorder: "#F3FF00",
    text: {
        id: "block5text",
        type: "text",
        point: { x: 4, y: 7 },
        width: 5,
        height: 5,
        chars: [char3, char4],
        chosenCharIds: ["char3", "char4"],
        alignment: 0,
        angleRotate: 0,
    },
    opacity: 100,
    type: "triangle",
    trianglePoint1: { x: 256, y: 293 },
    trianglePoint2: { x: 400, y: 130 },
    trianglePoint3: { x: 600, y: 50 },
};

const imageBlock: Image = {
    id: "block6",
    point: { x: 100, y: 100 },
    width: 100,
    height: 100,
    angleRotate: 0,
    type: "image",
    urlStr: "https://m.media-amazon.com/images/I/31enPn7dN+L.jpg",
};

const audioBlock: Audio = {
    id: "block6",
    point: { x: 150, y: 125 },
    width: 100,
    height: 100,
    angleRotate: 0,
    type: "audio",
    urlStr: "https://freesound.org/people/InspectorJ/sounds/405561/",
};

const videoBlock: Video = {
    id: "block7",
    point: { x: 200, y: 175 },
    width: 100,
    height: 100,
    angleRotate: 0,
    type: "video",
    urlStr: "https://clck.ru/3vyXS",
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

const block2Animtion: Animation = {
    id: "anim2",
    blockId: "block2",
    animation: TypeAnimation.Appearing,
};

const slide1: Slide = {
    id: "slide1",
    background, // вот так
    elements: [textBlock, circle, rectangle, rightTriangle, imageBlock],
    chosenElements: ["block6"],
    transition: TransionType.Default,
    animations: [block1Animation],
};

const slide2: Slide = {
    id: "slide2",
    background, // вот так
    elements: [rightTriangle, textBlock, circle],
    chosenElements: ["block5"],
    transition: TransionType.Fading,
    animations: [block2Animtion],
};

const presentation0: Presentation = {
    height: 500,
    width: 600,
    versionId: "1",
    name: "React",
    slides: [slide1],
    chosenSlideIds: ["slide1"],
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

export { user, textBlock, circle, rectangle, rightTriangle, imageBlock };
