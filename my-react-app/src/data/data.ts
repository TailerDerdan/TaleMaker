import { MainEditor, Presentation } from "../model/types";

const presentation: Presentation = {
	mainSlideID: "",
	versionId: "1",
	name: "Презентация",
	slides: [],
	chosenSlideIds: [],
};

export const user: MainEditor = {
	presentation: presentation,
	history: [],
	viewingMode: "editor",
};

export function ChangeData(newData: any) {
	for (const key in newData) {
		if (key === "mainSlideID") {
			presentation.mainSlideID = newData[key];
		}
		if (key === "versionId") {
			presentation.versionId = newData[key];
		}
		if (key === "name") {
			presentation.name = newData[key];
		}
		if (key === "slides") {
			presentation.slides = newData[key];
		}
		if (key === "chosenSlideIds") {
			presentation.chosenSlideIds = newData[key];
		}
	}
}
