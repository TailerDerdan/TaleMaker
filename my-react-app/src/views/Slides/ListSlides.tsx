import React, { useEffect, useRef } from "react";
import styles from "./ListSlide.module.css";
import { SlideView } from "../../components/slide/Slide";
import { useAppActions, useAppSelector } from "../../redux/hooks";
import { Slide } from "../../model/types";
import { useDraggableList } from "../../hooks/useDdDForSlideBar";
import { SlideViewForSlideBar } from "./SlideViewForSlideBar";

type ListOfSlidesProps = {
	slides: Slide[];
};

const ListOfSLide = (props: ListOfSlidesProps) => {
	const { slides } = props;
	const { createDeleteSlide } = useAppActions();
	if (slides.length === 0) {
		return (
			<div className={styles.listOfSlideBlock}>
				<div className={styles.listOfSlide}></div>
			</div>
		);
	}
	const widthSlide = slides[0].width * document.documentElement.clientWidth;

	const scale: number = 300 / widthSlide;

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key == "Delete") {
				createDeleteSlide();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, []);

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
				<SlideViewForSlideBar
					{...slide}
					registerDndItem={registerDndItem}
					index={index}
					scale={scale}
					refOnList={refOnList}
				/>
			</div>
		);
	});

	return (
		<div className={styles.listOfSlideBlock}>
			<div ref={refOnList} className={styles.listOfSlide}>
				{viewsMinSlides}
			</div>
		</div>
	);
};

export { ListOfSLide };
