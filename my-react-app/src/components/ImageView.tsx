import React from "react";
import { Point } from "../model/types";

type ImageProps = {
    id: string;
    point: Point;
    width: number;
    height: number;
    angleRotate: number;
    urlStr: string;
};

const ImageView = (props: ImageProps) => {
    const { urlStr, id, angleRotate, point, width, height } = props;
    return (
        <div
            style={{
                position: "absolute",
                top: point.y,
                left: point.x,
                transform: `rotate(${angleRotate})`,
            }}
            key={id}
        >
            <img
                src={urlStr}
                alt={urlStr}
                key={id}
                width={width}
                height={height}
            />
        </div>
    );
};

export { ImageView };
