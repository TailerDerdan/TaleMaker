import React from "react";
import { Point } from "../model/types";

type EllipseProps = {
    id: string;
    point: Point;
    width?: number;
    height?: number;
    angleRotate: number;
    color: string;
    borderThickness: number;
    colorBorder: string;
    opacity: number;
    radius: number;
    centre: Point;
};

const EllipseView = (props: EllipseProps) => {
    const {
        id,
        point,
        width,
        height,
        angleRotate,
        color,
        borderThickness,
        colorBorder,
        opacity,
        radius,
        centre,
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
                <circle
                    cx={centre.x}
                    cy={centre.y}
                    r={radius}
                    style={{
                        fill: color,
                        strokeWidth: borderThickness,
                        stroke: colorBorder,
                    }}
                ></circle>
            </svg>
        </div>
    );
};

export { EllipseView };
