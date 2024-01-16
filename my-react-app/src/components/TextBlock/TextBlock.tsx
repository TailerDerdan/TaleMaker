import React, { useEffect, useRef } from "react";
import { TextBlock } from "../../model/types";
import { useAppActions } from "../../redux/hooks";
import styles from "./TextBlock.module.css";

type TextBlockViewProps = TextBlock & {
	slideID: string;
};

function TextBlockView(props: TextBlockViewProps) {
	const {
		id,
		value,
		color,
		opacity,
		bold,
		underlined,
		fontFamily,
		fontSize,
		slideID,
		isSelection,
	} = props;

	const { createChangeTextBlockText } = useAppActions();
	const refOnText = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const resizeText = () => {
			refOnText.current!.style.height = "auto";
			refOnText.current!.style.height = `${
				refOnText.current!.scrollHeight
			}px`;
		};
		const OnMouseDown = (event: Event) => {
			if (isSelection) {
				event.stopPropagation();
				refOnText.current!.style.userSelect = "none";
				const OnMouseMove = (event: Event) => {
					event.stopPropagation();
					refOnText.current!.style.userSelect = "none";
				};
				const OnMouseUp = (event: Event) => {
					event.stopPropagation();
					refOnText.current!.style.userSelect = "none";
					refOnText.current?.removeEventListener(
						"mousemove",
						OnMouseMove,
					);
					refOnText.current?.removeEventListener(
						"mouseup",
						OnMouseUp,
					);
				};
				refOnText.current?.addEventListener("mousemove", OnMouseMove);
				refOnText.current?.addEventListener("mouseup", OnMouseUp);
			}
		};
		refOnText.current?.addEventListener("input", resizeText);
		refOnText.current?.addEventListener("mousedown", OnMouseDown);
		return () => {
			refOnText.current?.removeEventListener("input", resizeText);
			refOnText.current?.removeEventListener("mousedown", OnMouseDown);
		};
	}, [isSelection]);

	return (
		<textarea
			ref={refOnText}
			key={id}
			value={value}
			onChange={(change) => {
				createChangeTextBlockText(slideID, id, change.target.value);
			}}
			style={{
				color: color,
				fontFamily: fontFamily,
				fontSize: `${fontSize}pt`,
				fontWeight: bold ? "bold" : "",
				opacity: `${opacity}`,
				textDecoration: underlined ? "underline" : "",
			}}
			className={styles.textblock}
		/>
	);
}

export { TextBlockView };
