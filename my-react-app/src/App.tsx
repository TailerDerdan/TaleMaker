import React, { useEffect, useState } from "react";
import { TransionType, BackColor, Background } from "./model/types";
import { SlideProps, SlideView } from "./components/WorkField";
import {
    textBlock,
    circle,
    rectangle,
    rightTriangle,
    imageBlock,
} from "./data/typesC";
import { Header, HeaderProps } from "./views/Header/Header";

function App() {
    const [name, setName] = useState<string>("Презентация");

    const backgroundColor: BackColor = {
        type: "backColor",
        color: "#699DF9",
    };
    const background: Background = {
        type: backgroundColor,
    };
    const slide1: SlideProps = {
        id: "slide1",
        background: background, // вот так
        elements: [textBlock, circle, rectangle, rightTriangle, imageBlock],
        chosenElements: ["block6"],
        transition: TransionType.Default,
        width: 1024,
        height: 512,
    };
    return (
        <>
            <Header name={name} setName={setName} />
            <SlideView {...slide1} />
        </>
    );
}

export default App;
