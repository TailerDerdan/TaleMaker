import React, {
	MutableRefObject,
	Ref,
	RefObject,
	useEffect,
	useRef,
	useState,
} from "react";
import { useResize } from "../../hooks/useResize";
import { ObjectOnSlide, Point } from "../../model/types";
import { TCircleForResize } from "../../data/PutCircleForResizeData";
import { useAppActions } from "../../redux/hooks";

type CircleForResizeProps = {
	circleForResize: TCircleForResize;
	object: ObjectOnSlide;
	widthSlide: number;
	heightSlide: number;
	slideID: string;
	refOnResizeable: RefObject<HTMLDivElement>;
};
export const CircleForResize = (props: CircleForResizeProps) => {
	const {
		circleForResize,
		refOnResizeable,
		widthSlide,
		heightSlide,
		object,
		slideID,
	} = props;

	switch (circleForResize.locationOnObject) {
		case "left-middle":
			circleForResize.point.x = 0 - circleForResize.radiusX;
			circleForResize.point.y =
				object.height / 2 - circleForResize.radiusY;
			circleForResize.centre.x = 0;
			circleForResize.centre.y = object.height / 2;
			break;
		case "left-bottom":
			circleForResize.point.x = 0 - circleForResize.radiusX;
			circleForResize.point.y = object.height - circleForResize.radiusY;
			circleForResize.centre.x = 0;
			circleForResize.centre.y = object.height;
			break;
		case "middle-top":
			circleForResize.point.x =
				object.width / 2 - circleForResize.radiusX;
			circleForResize.point.y = 0 - circleForResize.radiusY;
			circleForResize.centre.x = object.width / 2;
			circleForResize.centre.y = 0;
			break;
		case "middle-bottom":
			circleForResize.point.x =
				object.width / 2 - circleForResize.radiusX;
			circleForResize.point.y = object.height - circleForResize.radiusY;
			circleForResize.centre.x = object.width / 2;
			circleForResize.centre.y = object.height;
			break;
		case "right-top":
			circleForResize.point.x = object.width - circleForResize.radiusX;
			circleForResize.point.y = 0 - circleForResize.radiusY;
			circleForResize.centre.x = object.width;
			circleForResize.centre.y = 0;
			break;
		case "right-middle":
			circleForResize.point.x = object.width - circleForResize.radiusX;
			circleForResize.point.y =
				object.height / 2 - circleForResize.radiusY;
			circleForResize.centre.x = object.width;
			circleForResize.centre.y = object.height / 2;
			break;
		case "right-bottom":
			circleForResize.point.x = object.width - circleForResize.radiusX;
			circleForResize.point.y = object.height - circleForResize.radiusY;
			circleForResize.centre.x = object.width;
			circleForResize.centre.y = object.height;
			break;
		case "rotate":
			circleForResize.point.x =
				object.width / 2 - circleForResize.radiusX;
			circleForResize.point.y = 0 - circleForResize.radiusY * 3;
			circleForResize.centre.x = object.width / 2;
			circleForResize.centre.y = 0 - circleForResize.radiusY * 2;
			break;
		default:
			break;
	}

	const ref = useRef<HTMLDivElement>(null);
	const {
		createChangeBlockCoords,
		createChangeBlockWidth,
		createChangeBlockHeight,
		createChangeEllipseCentre,
		createChangeEllipseRadiusX,
		createChangeEllipseRadiusY,
		createChangeBlockAngleRotate,
		createChangeBlockSelection,
	} = useAppActions();

	useResize({
		slideID,
		refOnResizeable,
		refOnObject: ref,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide,
		heightSlide,
		coordsObject: object.point,
		coordsCircle: circleForResize.point,
		setCoords: createChangeBlockCoords,
		setWidth: createChangeBlockWidth,
		setHeight: createChangeBlockHeight,
		blockResizeableID: object.id,
		blockCircleID: circleForResize.id,
		radiusCircle: circleForResize.radiusX,
		locationOnObject: circleForResize.locationOnObject,
		topObject: object.point.y,
		leftObject: object.point.x,
		setSelection: createChangeBlockSelection,
	});

	return (
		<div
			ref={ref}
			style={{
				position: "absolute",
				width: circleForResize.width,
				height: circleForResize.height,
				top: `${circleForResize.point.y}px`,
				left: `${circleForResize.point.x}px`,
				zIndex: "100",
			}}
		>
			<svg
				width={circleForResize.width}
				height={circleForResize.height}
				style={{ position: "absolute" }}
			>
				<circle
					cx={"50%"}
					cy={"50%"}
					r={circleForResize.radiusX}
					style={{ fill: circleForResize.color }}
				></circle>
			</svg>
		</div>
	);
};
