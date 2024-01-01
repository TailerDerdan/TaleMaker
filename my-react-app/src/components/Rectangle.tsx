import React, { useState } from "react";
import { Point } from "../model/types";

type RectangleProps = {
    id: string;
    point: Point;
    width: number;
    height: number;
    angleRotate: number;
    color: string;
    borderThickness: number;
    colorBorder: string;
    opacity: number;
};

const RectangleView = (props: RectangleProps) => {
    const {
        id,
        point,
        angleRotate,
        color,
        borderThickness,
        colorBorder,
        opacity,
        width,
        height,
    } = props;
    return (
        <div
            key={id}
            style={{
                position: "absolute",
                top: point.x,
                left: point.y,
                width: width,
                height: height,
                transform: `rotate(${angleRotate})`,
                opacity: opacity,
            }}
        >
            <svg style={{ width: width, height: height, opacity: opacity }}>
                <rect
                    style={{
                        fill: color,
                        strokeWidth: borderThickness,
                        stroke: colorBorder,
                        width: width,
                        height: height,
                    }}
                ></rect>
            </svg>
        </div>
    );
};

export { RectangleView };
