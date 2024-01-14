import { Background, Slide } from "../model/types";
import { user } from "../data/typesC";
import {
	Actions,
	AudioActions,
	BackgroundActions,
	BlockActions,
	EllipseActions,
	ImageActions,
	RectangleActions,
	SlideActions,
	TextBlockActions,
	TriangleActions,
	VideoActions,
} from "./action";
import { combineReducers } from "redux";

const allSlides = user.presentation.slides;

const slideReducer = (state: Slide[] = allSlides, action: Actions) => {
	switch (action.type) {
		case BlockActions.CHANGE_ANGLE_ROTATE:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.map((elem) => {
							if (elem.id == action.payload.blockID) {
								return {
									...elem,
									angleRotate: action.payload.newAngle,
								};
							}
							return elem;
						}),
					};
				}
				return object;
			});
		case BlockActions.CHANGE_COORDS:
			return state.map((object) => {
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
			});
		case BlockActions.CHANGE_HEIGHT:
			return state.map((object) => {
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
			});
		case BlockActions.CHANGE_WIDTH:
			return state.map((object) => {
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
			});
		case BlockActions.CHANGE_OPACITY:
			return state.map((object) => {
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
			});
		case BlockActions.DELETE_BLOCK:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.filter(
							(obj) => obj.id !== action.payload.blockID,
						),
					};
				}
				return object;
			});
		case BlockActions.CHANGE_SELECTION:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.map((elem) => {
							if (elem.id == action.payload.blockID) {
								return {
									...elem,
									isSelection: action.payload.isSelection,
								};
							}
							return elem;
						}),
					};
				}
				return object;
			});
		case RectangleActions.ADD_RECTANGLE:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.concat([action.payload]),
					};
				}
				return object;
			});
		case EllipseActions.ADD_ELLIPSE:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.concat([action.payload]),
					};
				}
				return object;
			});
		case EllipseActions.CHANGE_CENTRE:
			return state.map((object) => {
				if (object?.id == action.slideID) {
					return {
						...object,
						elements: object.elements.map((elem) => {
							if (elem.id == action.payload.ellipseID) {
								return {
									...elem,
									centre: action.payload.newCentre,
								};
							}
							return elem;
						}),
					};
				}
				return object;
			});
		case EllipseActions.CHANGE_RADIUS_X:
			return state.map((object) => {
				if (object?.id == action.slideID) {
					return {
						...object,
						elements: object.elements.map((elem) => {
							if (elem.id == action.payload.ellipseID) {
								return {
									...elem,
									radiusX: action.payload.newRadiusX,
								};
							}
							return elem;
						}),
					};
				}
				return object;
			});
		case EllipseActions.CHANGE_RADIUS_Y:
			return state.map((object) => {
				if (object?.id == action.slideID) {
					return {
						...object,
						elements: object.elements.map((elem) => {
							if (elem.id == action.payload.ellipseID) {
								return {
									...elem,
									radiusY: action.payload.newRadiusY,
								};
							}
							return elem;
						}),
					};
				}
				return object;
			});
		case TriangleActions.ADD_TRIANGLE:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.concat([action.payload]),
					};
				}
				return object;
			});
		case TriangleActions.CHANGE_POINT:
			return state.map((object) => {
				if (object?.id == action.slideID) {
					return {
						...object,
						elements: object.elements.map((elem) => {
							if (elem.id == action.payload.triangleID) {
								return {
									...elem,
									trianglePoint1: action.payload.newPoint,
								};
							}
							return elem;
						}),
					};
				}
				return object;
			});
		case TextBlockActions.ADD_TEXT_BLOCK:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.concat([action.payload]),
					};
				}
				return object;
			});
		case TextBlockActions.CHANGE_TEXT:
			return state.map((object) => {
				if (object?.id == action.slideID) {
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
			});
		case SlideActions.ADD_SLIDE:
			return [...state, action.payload];
		case SlideActions.DELETE_SLIDE:
			return state.filter((obj) => obj.id !== action.payload.slideID);
		case SlideActions.CHANGE_ORDER: {
			const newSlides = [...state];
			console.log(newSlides);
			const removed = newSlides.splice(action.payload.from, 1);
			newSlides.splice(action.payload.to, 0, removed[0]);
			console.log(newSlides);
			return newSlides;
		}
		case BackgroundActions.CHANGE_BACKGROUND_COLOR:
			return state.map((object) => {
				if (object?.id == action.payload.slideID) {
					return {
						...object,
						typeBackground: Background.Color,
						background: action.payload.newBackgroundColor,
					};
				}
				return object;
			});
		case BackgroundActions.CHANGE_BACKGROUND_IMAGE:
			return state.map((object) => {
				if (object?.id == action.payload.slideID) {
					return {
						...object,
						typeBackground: Background.Image,
						background: action.payload.newBackgroundImage,
					};
				}
				return object;
			});
		case AudioActions.ADD_AUDIO:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.concat([action.payload]),
					};
				}
				return object;
			});
		case VideoActions.ADD_VIDEO:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.concat([action.payload]),
					};
				}
				return object;
			});
		case ImageActions.ADD_IMAGE:
			return state.map((object) => {
				if (object.id == action.slideID) {
					return {
						...object,
						elements: object.elements.concat([action.payload]),
					};
				}
				return object;
			});
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	slides: slideReducer,
});

export { rootReducer };
