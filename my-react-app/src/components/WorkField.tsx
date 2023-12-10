import React from "react";
import { Background, ObjectOnSlide, TransionType } from "../model/types";
import { EllipseView } from "./Ellipse";
import { RectangleView } from "./Rectangle";
import { TriangleView } from "./Triangle";
import { TextBlockView } from "./TextBlock";

type SlideProps = {
    id: string;
    background: Background;
    elements: Array<ObjectOnSlide>;
    chosenElements: Array<string>;
    transition: TransionType;
    animations?: Array<Animation>;
    width: number;
    height: number;
};

function SlideView(props: SlideProps) {
    const {
        id,
        background,
        elements,
        chosenElements,
        transition,
        animations,
        width,
        height,
    } = props;

    const slideElements = elements.map((el) => {
        switch (el.type) {
            case "rectangle":
                return <RectangleView {...el} />;
            case "ellipse":
                return <EllipseView {...el} />;
            case "triangle":
                return <TriangleView {...el} />;
            case "text":
                return <TextBlockView {...el} />;
            default:
                return <></>;
        }
    });

    return (
        <div
            id={id}
            style={{
                position: "relative",
                width: width,
                height: height,
                border: "2px solid #000",
            }}
        >
            {slideElements}
        </div>
    );
}

export { SlideView };
export type { SlideProps };
