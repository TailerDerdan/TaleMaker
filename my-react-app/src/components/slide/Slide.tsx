import React from "react";
import { Background, ObjectOnSlide, TransionType } from "../../model/types";
import { EllipseView } from "../Ellipse";
import { RectangleView } from "../Rectangle";
import { TriangleView } from "../Triangle";
import { TextBlockView } from "../TextBlock";
import { ImageView } from "../ImageView";
import styles from "../slide/Slide.module.css";

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
            case "image":
                return <ImageView {...el} />;
            default:
                return <></>;
        }
    });

    return (
        <div
            key={id}
            className={styles.slideStyles}
            style={{
                width: `${width * document.documentElement.clientWidth}px`,
                height: `${height * document.documentElement.clientHeight}px`,
            }}
        >
            {slideElements}
        </div>
    );
}

export { SlideView };
export type { SlideProps };
