import React from "react";
import { Header } from "../Header/Header";
import { ListOfSLide } from "../Slides/ListSlides";
import { WorkField } from "../WorkField/WorkField";
import styles from "./App.module.css";

function App() {
	return (
		<>
			<Header />
			<div className={styles.two__panel__layout}>
				<ListOfSLide />
				<WorkField id="slide1" />
			</div>
		</>
	);
}

export default App;
