import React, {
	ReactNode,
	RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { Ellipse, ObjectOnSlide, Point } from "../../model/types";
import {
	useDragAndDrop,
	useDraggableWorkFieldProps,
} from "../../hooks/useDragAndDrop";
import { useSelection } from "../../hooks/UseSelection";
import { useAppActions, useAppSelector } from "../../redux/hooks";
import { AddData, TCircleForResize } from "../../data/PutCircleForResizeData";
import { CircleForResize } from "./CircleForResize";

type WrapperProps = {
	object: ObjectOnSlide;
	slideID: string;
	widthSlide: number;
	heightSlide: number;
	initialObject: ReactNode;
};

export const Wrapper = (props: WrapperProps) => {
	const { object, widthSlide, heightSlide, initialObject, slideID } = props;

	const refObject = useRef<HTMLDivElement>(null);
	const refInitialOnObject = useRef<HTMLDivElement>(null);
	const { createChangeBlockCoords } = useAppActions();
	const { createChangeBlockSelection } = useAppActions();

	const propsForDragAndDrop: useDraggableWorkFieldProps = {
		refInitialOnObject,
		refObject,
		setCoords: createChangeBlockCoords,
		widthSlide,
		heightSlide,
		coords: object.point,
		blockID: object.id,
		slideID,
	};

	const circlesForResize: TCircleForResize[] = [];

	useEffect(() => {
		useSelection({
			slideID,
			blockID: object.id,
			refOnObject: refInitialOnObject,
			setDown: createChangeBlockSelection,
		});
	}, [object.isSelection]);
	useEffect(() => {
		useDragAndDrop(propsForDragAndDrop);
	}, [object.point]);

	if (object.isSelection) {
		AddData(circlesForResize);
	} else {
		circlesForResize.splice(0);
	}

	return (
		<div
			key={object.id}
			ref={refInitialOnObject}
			style={{
				position: "absolute",
				top: `${object.point.y}px`,
				left: `${object.point.x}px`,
				width: `${object.width}px`,
				height: `${object.height}px`,
				transform: `rotate(${object.angleRotate})`,
				opacity: object.opacity,
				border: object.isSelection
					? "4px solid rgba(125, 66, 110, 1)"
					: "",
			}}
		>
			<div
				ref={refObject}
				style={{ position: "absolute", width: "100%", height: "100%" }}
			>
				{initialObject}
			</div>
			{circlesForResize.map((elem) => (
				<CircleForResize
					slideID={slideID}
					key={elem.locationOnObject}
					circleForResize={elem}
					object={object}
					widthSlide={widthSlide}
					heightSlide={heightSlide}
					refOnResizeable={refInitialOnObject}
				/>
			))}
		</div>
	);
};
