import React, {
	ReactNode,
	RefObject,
	useEffect,
	useRef,
	useState,
} from "react";
import { ObjectOnSlide, Point } from "../../model/types";
import {
	useDragAndDrop,
	useDraggableWorkFieldProps,
} from "../../hooks/useDragAndDrop";
import { useSelection } from "../../hooks/UseSelection";
import { CircleForResize, CircleForResizeProps } from "./CircleForResize";

type AddDataProps = {
	circlesForResize: CircleForResizeProps[];
	coords: Point;
	object: ObjectOnSlide;
	widthSlide: number;
	heightSlide: number;
	refObject: RefObject<HTMLDivElement>;
};

function AddData(props: AddDataProps) {
	const {
		circlesForResize,
		object,
		refObject,
		widthSlide,
		heightSlide,
		coords,
	} = props;
	circlesForResize.push({
		locationOnObject: "left-top",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});

	circlesForResize.push({
		locationOnObject: "left-middle",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});

	circlesForResize.push({
		locationOnObject: "left-bottom",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});

	circlesForResize.push({
		locationOnObject: "middle-top",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});

	circlesForResize.push({
		locationOnObject: "middle-bottom",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});

	circlesForResize.push({
		locationOnObject: "right-top",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});

	circlesForResize.push({
		locationOnObject: "right-middle",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});

	circlesForResize.push({
		locationOnObject: "right-bottom",
		leftObject: coords.x,
		topObject: coords.y,
		widthObject: object.width,
		heightObject: object.height,
		widthSlide: widthSlide,
		heightSlide: heightSlide,
		refOnResizeable: refObject,
	});
}

type WrapperProps = {
	object: ObjectOnSlide;
	widthSlide: number;
	heightSlide: number;
	initialObject: ReactNode;
};

export type isDown = {
	isDown: boolean;
};

export const Wrapper = (props: WrapperProps) => {
	const { object, widthSlide, heightSlide, initialObject } = props;

	const refObject = useRef<HTMLDivElement>(null);
	const [coords, setCoords] = useState<Point>(object.point);
	const [isDown, setDown] = useState<isDown>({ isDown: false });

	const propsForDragAndDrop: useDraggableWorkFieldProps = {
		refOnObject: refObject,
		setCoords,
		widthSlide,
		heightSlide,
		coords,
	};
	useEffect(() => {
		useSelection({ refOnObject: refObject, setDown });
		useDragAndDrop(propsForDragAndDrop);
	}, [coords]);

	const circlesForResize: CircleForResizeProps[] = [];

	// console.log(isDown);

	if (isDown) {
		AddData({
			circlesForResize,
			object,
			refObject,
			widthSlide,
			heightSlide,
			coords,
		});
	} else {
		circlesForResize.length = 0;
	}

	return (
		<div
			ref={refObject}
			key={object.id}
			style={{
				position: "absolute",
				top: `${coords.y}px`,
				left: `${coords.x}px`,
				width: object.width,
				height: object.height,
				transform: `rotate(${object.angleRotate})`,
				opacity: object.opacity,
			}}
		>
			{initialObject}
			{circlesForResize.map((elem) => (
				<CircleForResize
					key={elem.locationOnObject}
					locationOnObject={elem.locationOnObject}
					leftObject={elem.leftObject}
					topObject={elem.topObject}
					widthObject={elem.widthObject}
					heightObject={elem.heightObject}
					widthSlide={elem.widthSlide}
					heightSlide={elem.heightSlide}
					refOnResizeable={elem.refOnResizeable}
				/>
			))}
		</div>
	);
};
