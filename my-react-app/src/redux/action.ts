import {
	Audio,
	Char,
	Ellipse,
	Image,
	Point,
	Rectangle,
	Slide,
	TextBlock,
	Triangle,
	Video,
} from "../model/types";

enum BlockActions {
	CHANGE_WIDTH = "CHANGE_WIDTH",
	CHANGE_HEIGHT = "CHANGE_HEIGHT",
	CHANGE_ANGLE_ROTATE = "CHANGE_ANGLE_ROTATE",
	CHANGE_COORDS = "CHANGE_ORDER",
	CHANGE_OPACITY = "CHANGE_OPACITY",
	DELETE_BLOCK = "DELETE_BLOCK",
	CHANGE_SELECTION = "CHANGE_SELECTION",
}
type ChangeBlockWidth = {
	type: BlockActions.CHANGE_WIDTH;
	slideID: string;
	payload: {
		blockID: string;
		newWidth: number;
	};
};
type ChangeBlockHeight = {
	type: BlockActions.CHANGE_HEIGHT;
	slideID: string;
	payload: {
		blockID: string;
		newHeight: number;
	};
};
type ChangeBlockAngleRotate = {
	type: BlockActions.CHANGE_ANGLE_ROTATE;
	slideID: string;
	payload: {
		blockID: string;
		newAngle: number;
	};
};
type ChangeBlockCoords = {
	type: BlockActions.CHANGE_COORDS;
	slideID: string;
	payload: {
		blockID: string;
		newCoords: Point;
	};
};
type ChangeBlockOpacity = {
	type: BlockActions.CHANGE_OPACITY;
	slideID: string;
	payload: {
		blockID: string;
		newOpacity: number;
	};
};
type DeleteBlock = {
	type: BlockActions.DELETE_BLOCK;
	slideID: string;
	payload: {
		blockID: string;
	};
};
type ChangeBlockSelection = {
	type: BlockActions.CHANGE_SELECTION;
	slideID: string;
	payload: {
		blockID: string;
		isSelection: boolean;
	};
};

enum GraphicObjectAction {
	CHANGE_COLOR = "CHANGE_COLOR",
	CHANGE_BORDER_THICKNESS = "CHANGE_BORDER_THICKNESS",
	CHANGE_COLOR_BORDER = "CHANGE_COLOR_BORDER",
}
type ChangeGraphicObjectColor = {
	type: GraphicObjectAction.CHANGE_COLOR;
	slideID: string;
	payload: {
		blockID: string;
		color: string;
	};
};
type ChangeGraphicObjectBorderColor = {
	type: GraphicObjectAction.CHANGE_COLOR_BORDER;
	slideID: string;
	payload: {
		blockID: string;
		borderColor: string;
	};
};
type ChangeGraphicObjectBorderThickness = {
	type: GraphicObjectAction.CHANGE_BORDER_THICKNESS;
	slideID: string;
	payload: {
		blockID: string;
		borderThickness: number;
	};
};

enum TextBlockActions {
	CHANGE_TEXT = "CHANGE_TEXT",
	ADD_TEXT_BLOCK = "ADD_TEXT_BLOCK",
}
type ChangeTextBlockText = {
	type: TextBlockActions.CHANGE_TEXT;
	slideID: string;
	payload: {
		textBlockID: string;
		newText: Array<Char>;
	};
};
type AddTextBlock = {
	type: TextBlockActions.ADD_TEXT_BLOCK;
	slideID: string;
	payload: TextBlock;
};

enum EllipseActions {
	CHANGE_RADIUS_X = "CHANGE_RADIUS_X",
	CHANGE_RADIUS_Y = "CHANGE_RADIUS_Y",
	CHANGE_CENTRE = "CHANGE_CENTRE",
	ADD_ELLIPSE = "ADD_ELLIPSE",
}
type ChangeEllipseRadiusX = {
	type: EllipseActions.CHANGE_RADIUS_X;
	slideID: string;
	payload: {
		ellipseID: string;
		newRadiusX: number;
	};
};
type ChangeEllipseRadiusY = {
	type: EllipseActions.CHANGE_RADIUS_Y;
	slideID: string;
	payload: {
		ellipseID: string;
		newRadiusY: number;
	};
};
type ChangeEllipseCentre = {
	type: EllipseActions.CHANGE_CENTRE;
	slideID: string;
	payload: {
		ellipseID: string;
		newCentre: Point;
	};
};
type AddEllipse = {
	type: EllipseActions.ADD_ELLIPSE;
	slideID: string;
	payload: Ellipse;
};

enum TriangleActions {
	CHANGE_POINT = "CHANGE_POINT",
	ADD_TRIANGLE = "ADD_TRIANGLE",
}
type ChangeTrianglePoint = {
	type: TriangleActions.CHANGE_POINT;
	slideID: string;
	payload: {
		triangleID: string;
		newPoint: Point;
	};
};
type AddTriangle = {
	type: TriangleActions.ADD_TRIANGLE;
	slideID: string;
	payload: Triangle;
};

enum RectangleActions {
	ADD_RECTANGLE = "ADD_RECTANGLE",
}
type AddRectangle = {
	type: RectangleActions.ADD_RECTANGLE;
	slideID: string;
	payload: Rectangle;
};

enum ImageActions {
	ADD_IMAGE = "ADD_IMAGE",
}
type AddImage = {
	type: ImageActions.ADD_IMAGE;
	slideID: string;
	payload: Image;
};

enum VideoActions {
	ADD_VIDEO = "ADD_VIDEO",
}
type AddVideo = {
	type: VideoActions.ADD_VIDEO;
	slideID: string;
	payload: Video;
};

enum AudioActions {
	ADD_AUDIO = "ADD_AUDIO",
}
type AddAudio = {
	type: AudioActions.ADD_AUDIO;
	slideID: string;
	payload: Audio;
};

enum BackgroundActions {
	CHANGE_BACKGROUND_IMAGE = "CHANGE_BACKGROUND_IMAGE",
	CHANGE_BACKGROUND_COLOR = "CHANGE_BACKGROUND_COLOR",
}
type ChangeBackgroundImage = {
	type: BackgroundActions.CHANGE_BACKGROUND_IMAGE;
	payload: {
		slideID: string;
		newBackgroundImage: string;
	};
};
type ChangeBackgroundColor = {
	type: BackgroundActions.CHANGE_BACKGROUND_COLOR;
	payload: {
		slideID: string;
		newBackgroundColor: string;
	};
};

enum SlideActions {
	ADD_SLIDE = "ADD_SLIDE",
	DELETE_SLIDE = "DELETE_SLIDE",
	CHANGE_ORDER = "CHANGE_ORDER",
}
type AddSlide = {
	type: SlideActions.ADD_SLIDE;
	slideID: string;
	payload: Slide;
};
type DeleteSlide = {
	type: SlideActions.DELETE_SLIDE;
	slideID: string;
	payload: {
		slideID: string;
	};
};
type ChangeOrder = {
	type: SlideActions.CHANGE_ORDER;
	slideID: string;
	payload: {
		from: number;
		to: number;
	};
};

type Actions =
	| AddAudio
	| AddVideo
	| ChangeBackgroundColor
	| ChangeBackgroundImage
	| AddImage
	| ChangeBlockAngleRotate
	| ChangeBlockHeight
	| ChangeBlockOpacity
	| ChangeBlockCoords
	| ChangeBlockWidth
	| ChangeEllipseCentre
	| ChangeEllipseRadiusX
	| ChangeEllipseRadiusY
	| ChangeTextBlockText
	| ChangeTrianglePoint
	| AddTriangle
	| AddEllipse
	| AddRectangle
	| AddTextBlock
	| DeleteBlock
	| AddSlide
	| DeleteSlide
	| ChangeBlockSelection
	| ChangeGraphicObjectBorderColor
	| ChangeGraphicObjectBorderThickness
	| ChangeGraphicObjectColor
	| ChangeOrder;

export {
	type Actions,
	BlockActions,
	AudioActions,
	EllipseActions,
	VideoActions,
	BackgroundActions,
	ImageActions,
	TriangleActions,
	TextBlockActions,
	RectangleActions,
	SlideActions,
	GraphicObjectAction,
};
