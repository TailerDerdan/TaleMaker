import React, { useEffect, useState } from "react";
import "./App.css";
import "./model/types";
import { ObjectOnSlide } from "./model/types";
import { user, textBlock } from "./data/typesC";

function App() {
    const [objectsOnSlide, setObjectonSlide] =
        useState<Array<ObjectOnSlide> | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setObjectonSlide(textBlock);
        }, 1200);
    }, []);
}

export default App;
