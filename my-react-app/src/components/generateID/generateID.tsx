type generateIDProps = {
	typeOfObject: string;
	countOfObject: number;
};

export function generateID(props: generateIDProps) {
	const { typeOfObject, countOfObject } = props;
	switch (typeOfObject) {
		case "text":
			return `textBlock${countOfObject + 1}`;
		case "ellipse":
			return `ellipse${countOfObject + 1}`;
		case "rectangle":
			return `rectangle${countOfObject + 1}`;
		case "triangle":
			return `triangle${countOfObject + 1}`;
		case "image":
			return `image${countOfObject + 1}`;
		case "video":
			return `video${countOfObject + 1}`;
		case "audio":
			return `audio${countOfObject + 1}`;
		case "slide":
			return `slide${countOfObject + 1}`;
		default:
			return "";
	}
}
