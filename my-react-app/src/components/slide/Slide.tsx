import React, { RefObject, useEffect, useRef, useState } from "react";
import { Background, ObjectOnSlide, TransionType } from "../../model/types";
import { EllipseView } from "../Ellipse";
import { RectangleView } from "../Rectangle";
import { TriangleView } from "../Triangle";
import { TextBlockView } from "../TextBlock";
import { ImageView } from "../ImageView";
import styles from "../slide/Slide.module.css";
import { Wrapper } from "../WrapperForObjectOnSlide/Wrapper";

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

type ObjectProps = {
	objectOnSlide: ObjectOnSlide;
	widthSlide: number;
	heightSlide: number;
};
const Object = (props: ObjectProps) => {
	const { objectOnSlide, widthSlide, heightSlide } = props;

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
			object={objectOnSlide}
			widthSlide={widthSlide}
			heightSlide={heightSlide}
			initialObject={initialObject()}
		/>
	);
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

	const widthSlide = width * document.documentElement.clientWidth;
	const heightSlide = height * document.documentElement.clientHeight;

	return (
		<div
			key={id}
			className={styles.slideStyles}
			style={{
				width: `${widthSlide}px`,
				height: `${heightSlide}px`,
			}}
		>
			{elements.map((elem) => (
				<Object
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
