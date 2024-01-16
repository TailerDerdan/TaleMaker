import React, { RefObject, useEffect, useRef, useState } from "react";
import { ObjectOnSlide, Slide } from "../../model/types";
import { EllipseView } from "../Ellipse";
import { RectangleView } from "../Rectangle";
import { TriangleView } from "../Triangle";
import { TextBlockView } from "../TextBlock/TextBlock";
import { ImageView } from "../ImageView";
import styles from "../slide/Slide.module.css";
import { Wrapper } from "../WrapperForObjectOnSlide/Wrapper";
import { RegisterDndItemFn } from "../../hooks/useDdDForSlideBar";
import { useAppActions } from "../../redux/hooks";
import { useSelection } from "../../hooks/UseSelection";
import { useSelectionForSlideBar } from "../../hooks/useSelectionForSlideBar";

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
				return <TextBlockView {...objectOnSlide} slideID={slideID} />;
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

type SlideProps = Slide;

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
	} = props;

	const widthSlide = width * document.documentElement.clientWidth;
	const heightSlide = height * document.documentElement.clientHeight;

	const ref = useRef<HTMLDivElement>(null);

	return (
		<div
			key={id}
			ref={ref}
			className={styles.slideStyles}
			style={{
				width: `${widthSlide}px`,
				height: `${heightSlide}px`,
				backgroundImage: typeBackground == "image" ? background : "",
				backgroundColor: typeBackground == "color" ? background : "",
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
