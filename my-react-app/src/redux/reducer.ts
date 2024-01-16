import { Background, MainEditor } from "../model/types";
import { user } from "../data/data";
import {
	Actions,
	AudioActions,
	BackgroundActions,
	BlockActions,
	EllipseActions,
	GraphicObjectAction,
	ImageActions,
	MainEditorActions,
	RectangleActions,
	SlideActions,
	TextBlockActions,
	TriangleActions,
	VideoActions,
} from "./action";
import { combineReducers } from "redux";

const mainEditor = user;
const allSlides = mainEditor.presentation.slides;

function getNextSlide(slideID: string) {
	for (let i = 0; i < allSlides.length; i++) {
		if (allSlides[i].id === slideID) {
			if (allSlides[i + 1]) {
				return allSlides[i + 1].id;
			}
			if (allSlides[i - 1]) {
				return allSlides[i - 1].id;
			}
			return "";
		}
	}
	return "";
}

const slideReducer = (state: MainEditor = mainEditor, action: Actions) => {
	switch (action.type) {
		case BlockActions.CHANGE_ANGLE_ROTATE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											angleRotate:
												action.payload.newAngle,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case BlockActions.CHANGE_COORDS:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											point: action.payload.newCoords,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case BlockActions.CHANGE_HEIGHT:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											height: action.payload.newHeight,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case BlockActions.CHANGE_WIDTH:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											width: action.payload.newWidth,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case BlockActions.CHANGE_OPACITY:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											opacity: action.payload.newOpacity,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case BlockActions.DELETE_BLOCK:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.filter(
									(obj) => !obj.isSelection,
								),
							};
						}
						return object;
					}),
				},
			};
		case BlockActions.CHANGE_SELECTION_BLOCK:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											isSelection:
												action.payload.isSelection,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case RectangleActions.ADD_RECTANGLE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.concat([
									action.payload,
								]),
							};
						}
						return object;
					}),
				},
			};
		case EllipseActions.ADD_ELLIPSE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.concat([
									action.payload,
								]),
							};
						}
						return object;
					}),
				},
			};
		case TriangleActions.ADD_TRIANGLE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.concat([
									action.payload,
								]),
							};
						}
						return object;
					}),
				},
			};
		case TextBlockActions.ADD_TEXT_BLOCK:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.concat([
									action.payload,
								]),
							};
						}
						return object;
					}),
				},
			};
		case TextBlockActions.CHANGE_TEXT:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.textBlockID) {
										return {
											...elem,
											value: action.payload.newText,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case TextBlockActions.CHANGE_TEXT_COLOR:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.textBlockID) {
										return {
											...elem,
											color: action.payload.newColor,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case TextBlockActions.CHANGE_BOLD:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.textBlockID) {
										return {
											...elem,
											bold: action.payload.bold,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case TextBlockActions.CHANGE_FONT_FAMILY:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.textBlockID) {
										return {
											...elem,
											fontFamily:
												action.payload.newFontFamily,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case TextBlockActions.CHANGE_UNDERLINE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.textBlockID) {
										return {
											...elem,
											underlined:
												action.payload.underlined,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case TextBlockActions.CHANGE_FONT_SIZE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.textBlockID) {
										return {
											...elem,
											fontSize:
												action.payload.newFontSize,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case SlideActions.ADD_SLIDE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: [...state.presentation.slides, action.payload],
				},
			};
		case SlideActions.DELETE_SLIDE: {
			const slide = state.presentation.slides.filter(
				(el) => el.isSelection,
			);
			if (slide.length !== 0) {
				if (slide[0].id === state.presentation.mainSlideID) {
					state.presentation.mainSlideID = getNextSlide(slide[0].id);
				}
			}
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.filter(
						(obj) => !obj.isSelection,
					),
				},
			};
		}
		case SlideActions.CHANGE_ORDER: {
			const newSlides = [...state.presentation.slides];
			const removed = newSlides.splice(action.payload.from, 1);
			newSlides.splice(action.payload.to, 0, removed[0]);
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: newSlides,
				},
			};
		}
		case SlideActions.CHANGE_MAIN_SLIDE:
			return {
				...state,
				presentation: {
					...state.presentation,
					mainSlideID: action.payload.newMainSlideID,
				},
			};
		case SlideActions.CHANGE_SELECTION_SLIDE: {
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								isSelection: action.payload.isSelection,
							};
						}
						return object;
					}),
				},
			};
		}
		case GraphicObjectAction.CHANGE_COLOR:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											color: action.payload.color,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case GraphicObjectAction.CHANGE_COLOR_BORDER:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											colorBorder:
												action.payload.borderColor,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case GraphicObjectAction.CHANGE_BORDER_THICKNESS:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.map((elem) => {
									if (elem.id == action.payload.blockID) {
										return {
											...elem,
											borderThickness:
												action.payload.borderThickness,
										};
									}
									return elem;
								}),
							};
						}
						return object;
					}),
				},
			};
		case BackgroundActions.CHANGE_BACKGROUND_COLOR:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object?.id == action.payload.slideID) {
							return {
								...object,
								typeBackground: Background.Color,
								background: action.payload.newBackgroundColor,
							};
						}
						return object;
					}),
				},
			};
		case BackgroundActions.CHANGE_BACKGROUND_IMAGE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object?.id == action.payload.slideID) {
							return {
								...object,
								typeBackground: Background.Image,
								background: action.payload.newBackgroundImage,
							};
						}
						return object;
					}),
				},
			};
		// case AudioActions.ADD_AUDIO:
		// 	return state.map((object) => {
		// 		if (object.id == action.slideID) {
		// 			return {
		// 				...object,
		// 				elements: object.elements.concat([action.payload]),
		// 			};
		// 		}
		// 		return object;
		// 	});
		// case VideoActions.ADD_VIDEO:
		// 	return state.map((object) => {
		// 		if (object.id == action.slideID) {
		// 			return {
		// 				...object,
		// 				elements: object.elements.concat([action.payload]),
		// 			};
		// 		}
		// 		return object;
		// 	});
		case ImageActions.ADD_IMAGE:
			return {
				...state,
				presentation: {
					...state.presentation,
					slides: state.presentation.slides.map((object) => {
						if (object.id == action.slideID) {
							return {
								...object,
								elements: object.elements.concat([
									action.payload,
								]),
							};
						}
						return object;
					}),
				},
			};
		case MainEditorActions.CHANGE_NAME_PRESENTATION:
			return {
				...state,
				presentation: {
					...state.presentation,
					name: action.payload.newName,
				},
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	slides: slideReducer,
});

export { rootReducer };
