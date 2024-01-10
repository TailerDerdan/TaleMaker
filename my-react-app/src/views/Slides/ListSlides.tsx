import React, { useRef } from "react";
import styles from "./ListSlide.module.css";
import { SlideView } from "../../components/slide/Slide";
import { useAppActions, useAppSelector } from "../../redux/hooks";
import { Slide } from "../../model/types";
import { useDraggableList } from "../../hooks/useDdDForSlideBar";

const ListOfSLide = () => {
	const slides = useAppSelector((state) => state.slides);
	const widthSlide = slides[0].width * document.documentElement.clientWidth;

	const scale: number = 300 / widthSlide;

	const refOnList = useRef<HTMLDivElement>(null);
	const { createChangeOrder } = useAppActions();
	const { registerDndItem } = useDraggableList({
		onOrderChange: createChangeOrder,
	});

	const viewsMinSlides = slides.map((slide: Slide, index) => {
		return (
			<div
				className={styles.slide}
				key={slide.id}
				style={{
					scale: `${scale}`,
					width:
						slide.width *
						document.documentElement.clientWidth *
						scale,
					height:
						slide.height *
						document.documentElement.clientHeight *
						scale,
				}}
			>
				<SlideView
					{...slide}
					key={slide.id}
					registerDndItem={registerDndItem}
					index={index}
				/>
			</div>
		);
	});

	return (
		<div ref={refOnList} className={styles.listOfSlide}>
			{viewsMinSlides}
		</div>
	);
};

export { ListOfSLide };
