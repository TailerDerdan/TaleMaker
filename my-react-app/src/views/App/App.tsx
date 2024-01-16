import React from "react";
import { Header } from "../Header/Header";
import { ListOfSLide } from "../Slides/ListSlides";
import { WorkField } from "../WorkField/WorkField";
import styles from "./App.module.css";
import { slideMaker } from "../main/main";

function App() {
	return slideMaker();
}

export default App;
