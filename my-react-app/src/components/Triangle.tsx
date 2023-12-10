import React from "react";
import { Point } from "../model/types";

type TriangleProps = {
    id: string;
    point: Point;
    width?: number;
    height?: number;
    angleRotate: number;
    color: string;
    borderThickness: number;
    colorBorder: string;
    opacity: number;
    trianglePoint1: Point;
    trianglePoint2: Point;
    trianglePoint3: Point;
};

const TriangleView = (props: TriangleProps) => {
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
        trianglePoint1,
        trianglePoint2,
        trianglePoint3,
    } = props;
    const points = `${trianglePoint1.x}, ${trianglePoint1.y} ${trianglePoint2.x}, ${trianglePoint2.y} ${trianglePoint3.x}, ${trianglePoint3.y}`;
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
                <polygon
                    points={points}
                    style={{
                        fill: color,
                        strokeWidth: borderThickness,
                        stroke: colorBorder,
                    }}
                ></polygon>
            </svg>
        </div>
    );
};

export { TriangleView };
