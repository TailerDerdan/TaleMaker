import {
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
import {
	Audio,
	Ellipse,
	Image,
	Point,
	Rectangle,
	Slide,
	TextBlock,
	Triangle,
	Video,
} from "../model/types";

function createChangeBlockWidth(
	slideID: string,
	blockID: string,
	newWidth: number,
) {
	return {
		type: BlockActions.CHANGE_WIDTH,
		slideID,
		payload: {
			blockID,
			newWidth,
		},
	};
}
function createChangeBlockHeight(
	slideID: string,
	blockID: string,
	newHeight: number,
) {
	return {
		type: BlockActions.CHANGE_HEIGHT,
		slideID,
		payload: {
			blockID,
			newHeight,
		},
	};
}
function createChangeBlockOpacity(
	slideID: string,
	blockID: string,
	newOpacity: number,
) {
	return {
		type: BlockActions.CHANGE_OPACITY,
		slideID,
		payload: {
			blockID,
			newOpacity,
		},
	};
}
function createChangeBlockCoords(
	slideID: string,
	blockID: string,
	newCoords: Point,
) {
	return {
		type: BlockActions.CHANGE_COORDS,
		slideID,
		payload: {
			blockID,
			newCoords,
		},
	};
}
function createChangeBlockAngleRotate(
	slideID: string,
	blockID: string,
	newAngleRotate: number,
) {
	return {
		type: BlockActions.CHANGE_ANGLE_ROTATE,
		slideID,
		payload: {
			blockID,
			newAngleRotate,
		},
	};
}
function createDeleteBlock(slideID: string) {
	return {
		type: BlockActions.DELETE_BLOCK,
		slideID,
	};
}
function createChangeBlockSelection(
	slideID: string,
	blockID: string,
	isSelection: boolean,
) {
	return {
		type: BlockActions.CHANGE_SELECTION_BLOCK,
		slideID,
		payload: {
			blockID,
			isSelection,
		},
	};
}

function createChangeGraphicObjectColor(
	slideID: string,
	blockID: string,
	color: string,
) {
	return {
		type: GraphicObjectAction.CHANGE_COLOR,
		slideID,
		payload: {
			blockID,
			color,
		},
	};
}
function createChangeGraphicObjectBorderColor(
	slideID: string,
	blockID: string,
	borderColor: string,
) {
	return {
		type: GraphicObjectAction.CHANGE_COLOR_BORDER,
		slideID,
		payload: {
			blockID,
			borderColor,
		},
	};
}
function createChangeGraphicObjectBorderThickness(
	slideID: string,
	blockID: string,
	borderThickness: number,
) {
	return {
		type: GraphicObjectAction.CHANGE_BORDER_THICKNESS,
		slideID,
		payload: {
			blockID,
			borderThickness,
		},
	};
}

function createChangeTextBlockText(
	slideID: string,
	textBlockID: string,
	newText: string,
) {
	return {
		type: TextBlockActions.CHANGE_TEXT,
		slideID,
		payload: {
			textBlockID,
			newText,
		},
	};
}
function createAddTextBlock(slideID: string, textBlock: TextBlock) {
	return {
		type: TextBlockActions.ADD_TEXT_BLOCK,
		slideID,
		payload: textBlock,
	};
}
function createChangeTextBlockColor(
	slideID: string,
	textBlockID: string,
	newColor: string,
) {
	return {
		type: TextBlockActions.CHANGE_TEXT_COLOR,
		slideID,
		payload: {
			textBlockID,
			newColor,
		},
	};
}
function createChangeTextBlockFontSize(
	slideID: string,
	textBlockID: string,
	newFontSize: number,
) {
	return {
		type: TextBlockActions.CHANGE_FONT_SIZE,
		slideID,
		payload: {
			textBlockID,
			newFontSize,
		},
	};
}
function createChangeTextBlockFontFamily(
	slideID: string,
	textBlockID: string,
	newFontFamily: string,
) {
	return {
		type: TextBlockActions.CHANGE_FONT_FAMILY,
		slideID,
		payload: {
			textBlockID,
			newFontFamily,
		},
	};
}
function createChangeTextBlockBold(
	slideID: string,
	textBlockID: string,
	bold: boolean,
) {
	return {
		type: TextBlockActions.CHANGE_BOLD,
		slideID,
		payload: {
			textBlockID,
			bold,
		},
	};
}
function createChangeTextBlockUnderlined(
	slideID: string,
	textBlockID: string,
	underlined: boolean,
) {
	return {
		type: TextBlockActions.CHANGE_UNDERLINE,
		slideID,
		payload: {
			textBlockID,
			underlined,
		},
	};
}
function createChangeEllipseRadiusX(
	slideID: string,
	ellipseID: string,
	newRadiusX: number,
) {
	return {
		type: EllipseActions.CHANGE_RADIUS_X,
		slideID,
		payload: {
			ellipseID,
			newRadiusX,
		},
	};
}
function createChangeEllipseRadiusY(
	slideID: string,
	ellipseID: string,
	newRadiusY: number,
) {
	return {
		type: EllipseActions.CHANGE_RADIUS_Y,
		slideID,
		payload: {
			ellipseID,
			newRadiusY,
		},
	};
}
function createChangeEllipseCentre(
	slideID: string,
	ellipseID: string,
	newCentre: Point,
) {
	return {
		type: EllipseActions.CHANGE_CENTRE,
		slideID,
		payload: {
			ellipseID,
			newCentre,
		},
	};
}
function createAddEllipse(slideID: string, ellipse: Ellipse) {
	return {
		type: EllipseActions.ADD_ELLIPSE,
		slideID,
		payload: ellipse,
	};
}
function createChangeTrianglePoint(
	slideID: string,
	triangleID: string,
	newPoint: Point,
) {
	return {
		type: TriangleActions.CHANGE_POINT,
		slideID,
		payload: {
			triangleID,
			newPoint,
		},
	};
}
function createAddTriangle(slideID: string, triangle: Triangle) {
	return {
		type: TriangleActions.ADD_TRIANGLE,
		slideID,
		payload: triangle,
	};
}
function createAddImage(slideID: string, image: Image) {
	return {
		type: ImageActions.ADD_IMAGE,
		slideID,
		payload: image,
	};
}
function createAddVideo(slideID: string, video: Video) {
	return {
		type: VideoActions.ADD_VIDEO,
		slideID,
		payload: video,
	};
}
function createAddAudio(slideID: string, audio: Audio) {
	return {
		type: AudioActions.ADD_AUDIO,
		slideID,
		payload: audio,
	};
}
function createChangeBackgroundImage(
	slideID: string,
	newBackgroundImage: string,
) {
	return {
		type: BackgroundActions.CHANGE_BACKGROUND_IMAGE,
		payload: {
			slideID,
			newBackgroundImage,
		},
	};
}
function createChangeBackgroundColor(
	slideID: string,
	newBackgroundColor: string,
) {
	return {
		type: BackgroundActions.CHANGE_BACKGROUND_COLOR,
		payload: {
			slideID,
			newBackgroundColor,
		},
	};
}
function createAddRectangle(slideID: string, rectangle: Rectangle) {
	return {
		type: RectangleActions.ADD_RECTANGLE,
		slideID,
		payload: rectangle,
	};
}
function createAddSlide(slide: Slide) {
	return {
		type: SlideActions.ADD_SLIDE,
		payload: slide,
	};
}
function createDeleteSlide() {
	return {
		type: SlideActions.DELETE_SLIDE,
	};
}
function createChangeOrder(from: number, to: number) {
	return {
		type: SlideActions.CHANGE_ORDER,
		payload: {
			from,
			to,
		},
	};
}

function createMainSlide(newMainSlideID: string) {
	return {
		type: SlideActions.CHANGE_MAIN_SLIDE,
		payload: {
			newMainSlideID,
		},
	};
}

function createChangeSlideSelection(slideID: string, isSelection: boolean) {
	return {
		type: SlideActions.CHANGE_SELECTION_SLIDE,
		slideID,
		payload: {
			isSelection,
		},
	};
}

function createChangeMainEditorName(newName: string) {
	return {
		type: MainEditorActions.CHANGE_NAME_PRESENTATION,
		payload: {
			newName,
		},
	};
}

export {
	createAddAudio,
	createChangeBackgroundImage,
	createChangeBlockAngleRotate,
	createChangeBlockCoords,
	createChangeBlockHeight,
	createChangeBackgroundColor,
	createChangeBlockOpacity,
	createChangeBlockWidth,
	createChangeEllipseCentre,
	createChangeEllipseRadiusX,
	createChangeEllipseRadiusY,
	createAddImage,
	createChangeTextBlockText,
	createChangeTrianglePoint,
	createAddVideo,
	createAddEllipse,
	createAddTextBlock,
	createAddTriangle,
	createDeleteBlock,
	createDeleteSlide,
	createAddRectangle,
	createAddSlide,
	createChangeBlockSelection,
	createChangeGraphicObjectColor,
	createChangeGraphicObjectBorderThickness,
	createChangeGraphicObjectBorderColor,
	createChangeOrder,
	createMainSlide,
	createChangeSlideSelection,
	createChangeTextBlockBold,
	createChangeTextBlockFontSize,
	createChangeTextBlockColor,
	createChangeTextBlockUnderlined,
	createChangeTextBlockFontFamily,
	createChangeMainEditorName,
};
