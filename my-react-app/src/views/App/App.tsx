import React from "react";
import { user } from "../../data/typesC";
import { Header } from "../Header/Header";
import { ListOfSLide } from "../Slides/ListSlides";
import styles from "./App.module.css";
import { WorkField } from "../WorkField/WorkField";

function App() {
	return (
		<>
			<Header />
			<div className={styles.two__panel__layout}>
				<ListOfSLide slides={user.presentation.slides} />
				<WorkField id="slide2" />
			</div>
		</>
	);
}

export default App;
