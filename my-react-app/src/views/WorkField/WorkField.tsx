import React, { RefObject, useEffect, useRef } from "react";
import { SlideProps, SlideView } from "../../components/slide/Slide";
import styles from "./WorkField.module.css";
import { useAppActions, useAppSelector } from "../../redux/hooks";
import { MainEditor, Slide } from "../../model/types";

type WorkFieldProps = {
	mainEditor: MainEditor;
};

export const WorkField = (props: WorkFieldProps) => {
	const { mainEditor } = props;
	const { createDeleteBlock } = useAppActions();
	const ref = useRef<HTMLDivElement>(null);

	const slides = mainEditor.presentation.slides;

	const slide = slides.filter((el) => {
		if (el.id == mainEditor.presentation.mainSlideID) {
			return el;
		}
	});

	if (slide.length === 0) {
		return <div ref={ref} className={styles.workField}></div>;
	}

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key == "Delete") {
				createDeleteBlock(slide[0].id);
			}
		};
		document?.addEventListener("keydown", onKeyDown);
		return () => document?.removeEventListener("keydown", onKeyDown);
	});

	return (
		<div ref={ref} className={styles.workField}>
			<SlideView {...slide[0]} />
		</div>
	);
};
