import { Header } from "../Header/Header";
import styles from "../App/App.module.css";
import { ListOfSLide } from "../Slides/ListSlides";
import { WorkField } from "../WorkField/WorkField";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

export const slideMaker = () => {
	const mainEditor = useAppSelector((state) => state.slides);
	return (
		<>
			<Header mainEditor={mainEditor} />
			<div className={styles.two__panel__layout}>
				<ListOfSLide slides={mainEditor.presentation.slides} />
				<WorkField mainEditor={mainEditor} />
			</div>
		</>
	);
};
