import React, { RefObject, useRef } from "react";
import { SlideProps, SlideView } from "../../components/slide/Slide";
import styles from "./WorkField.module.css";

type WorkFieldProps = {
	slides: Array<SlideProps>;
	id: string;
};

export const WorkField = (props: WorkFieldProps) => {
	const { slides, id } = props;

	const slideUndefined = slides.find((el) => {
		if (el.id == id) {
			return el;
		}
	});

	const slide = slideUndefined ? slideUndefined : slides[0];

	const ref = useRef<HTMLDivElement>(null);

	return (
		<div ref={ref} className={styles.workField}>
			<SlideView {...slide} />
		</div>
	);
};
