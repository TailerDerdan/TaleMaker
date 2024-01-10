import React, { RefObject, useEffect, useRef, useState } from "react";
import { ObjectOnSlide, Slide, TransionType } from "../../model/types";
import { EllipseView } from "../Ellipse";
import { RectangleView } from "../Rectangle";
import { TriangleView } from "../Triangle";
import { TextBlockView } from "../TextBlock";
import { ImageView } from "../ImageView";
import styles from "../slide/Slide.module.css";
import { Wrapper } from "../WrapperForObjectOnSlide/Wrapper";
import { RegisterDndItemFn } from "../../hooks/useDdDForSlideBar";

type ObjectProps = {
	objectOnSlide: ObjectOnSlide;
	widthSlide: number;
	heightSlide: number;
	slideID: string;
};
const Object = (props: ObjectProps) => {
	const { objectOnSlide, widthSlide, heightSlide, slideID } = props;

	const initialObject = () => {
		switch (objectOnSlide.type) {
			case "rectangle":
				return <RectangleView {...objectOnSlide} />;
			case "ellipse":
				return <EllipseView {...objectOnSlide} />;
			case "text":
				return <TextBlockView {...objectOnSlide} />;
			case "image":
				return <ImageView {...objectOnSlide} />;
			case "triangle":
				return <TriangleView {...objectOnSlide} />;
			default:
				return <></>;
		}
	};
	return (
		<Wrapper
			slideID={slideID}
			object={objectOnSlide}
			widthSlide={widthSlide}
			heightSlide={heightSlide}
			initialObject={initialObject()}
		/>
	);
};

type SlideProps = Slide & {
	registerDndItem?: RegisterDndItemFn;
	index?: number;
};

function SlideView(props: SlideProps) {
	const {
		id,
		background,
		typeBackground,
		elements,
		chosenElements,
		transition,
		animations,
		width,
		height,
		registerDndItem,
		index,
	} = props;

	const widthSlide = width * document.documentElement.clientWidth;
	const heightSlide = height * document.documentElement.clientHeight;

	const ref = useRef<HTMLDivElement>(null);
	if (registerDndItem && index) {
		useEffect(() => {
			const { onDragStart } = registerDndItem(index, {
				elementRef: ref,
			});
			const onMouseDown = (mouseDownEvent: MouseEvent) => {
				onDragStart({
					onDrag: (dragEvent) => {
						ref.current!.style.position = "absolute";
						ref.current!.style.zIndex = "1";
						ref.current!.style.boxShadow = "black 2px 2px 4px";
						ref.current!.style.top = `${
							dragEvent.pageY - mouseDownEvent.pageY
						}px`;
					},
					onDrop: (dropEvent) => {
						ref.current!.style.position = "";
						ref.current!.style.zIndex = "";
						ref.current!.style.boxShadow = "";
						ref.current!.style.top = "";
					},
				});
			};
			const control = ref.current!;
			control.addEventListener("mousedown", onMouseDown);
			return () => control.removeEventListener("mousedown", onMouseDown);
		}, [index, registerDndItem]);
	}

	return (
		<div
			key={id}
			ref={ref}
			className={styles.slideStyles}
			style={{
				width: `${widthSlide}px`,
				height: `${heightSlide}px`,
			}}
		>
			{elements.map((elem) => (
				<Object
					slideID={id}
					key={elem.id}
					objectOnSlide={elem}
					widthSlide={widthSlide}
					heightSlide={heightSlide}
				/>
			))}
		</div>
	);
}

export { SlideView };
export type { SlideProps };
