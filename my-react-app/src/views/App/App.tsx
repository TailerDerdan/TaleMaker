import React from "react";
import { TransionType, BackColor, Background } from "../../model/types";
import { SlideProps } from "../../components/slide/Slide";
import {
	textBlock,
	circle,
	rectangle,
	rightTriangle,
	imageBlock,
	presentation1,
} from "../../data/typesC";
import { Header } from "../Header/Header";
import { ListOfSLide } from "../Slides/ListSlides";
import styles from "./App.module.css";
import { WorkField } from "../WorkField/WorkField";

function App() {
	const backgroundColor: BackColor = {
		type: "backColor",
		color: "#699DF9",
	};
	const background: Background = {
		type: backgroundColor,
	};
	const slide1: SlideProps = {
		id: "slide1",
		background: background,
		elements: [rightTriangle, imageBlock],
		chosenElements: ["block6"],
		transition: TransionType.Default,
		width: 0.66,
		height: 0.64,
	};
	const slide2: SlideProps = {
		id: "slide2",
		background,
		elements: [rightTriangle, textBlock, circle, rectangle],
		chosenElements: ["block5"],
		transition: TransionType.Fading,
		width: 0.66,
		height: 0.64,
	};
	return (
		<>
			<Header />
			<div className={styles.two__panel__layout}>
				<ListOfSLide slides={[slide2, slide1]} />
				<WorkField slides={[slide2, slide1]} id="slide2" />
			</div>
		</>
	);
}

export default App;
