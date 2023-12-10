import React from "react";
import { Point, Char, Alignment } from "../model/types";

type TextBlockViewProps = {
    id: string;
    point: Point;
    width?: number;
    height?: number;
    angleRotate: number;
    chars: Array<Char>;
    chosenCharIds: Array<string>;
    alignment: Alignment;
};

function TextBlockView(props: TextBlockViewProps) {
    const {
        id,
        point,
        width,
        height,
        angleRotate,
        chars,
        chosenCharIds,
        alignment,
    } = props;

    const spanArr = chars.map((ch) => {
        return (
            <span
                key={ch.id}
                style={{
                    fontFamily: `${ch.fontFamily}`,
                    fontSize: ch.fontSize,
                    color: `${ch.color}`,
                    textDecoration: ch.underlined ? "underline" : "none",
                    opacity: ch.opacity,
                    fontWeight: ch.bold ? 5 : 0,
                }}
            >
                {ch.value}
            </span>
        );
    });

    return (
        <div
            style={{
                display: "inline-block",
                position: "absolute",
                top: point.x,
                left: point.y,
            }}
        >
            {spanArr}
        </div>
    );
}

export { TextBlockView };
