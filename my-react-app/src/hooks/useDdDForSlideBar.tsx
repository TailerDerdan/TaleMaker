import { RefObject, useCallback, useEffect, useRef } from "react";
import { useAppActions } from "../redux/hooks";

type DndItemInfo = {
	elementRef: RefObject<HTMLDivElement>;
};

type InternalDndItemInfo = DndItemInfo & {
	startY: number;
};

type OnDragStartFn = (args: {
	onDrag: (event: MouseEvent) => void;
	onDrop: (event: MouseEvent) => void;
}) => void;

type RegisterDndItemFn = (
	index: number,
	dndItemInfo: DndItemInfo,
) => {
	onDragStart: OnDragStartFn;
};

type UseDraggableListParams = {
	onOrderChange: (fromIndex: number, toIndex: number) => void;
};

function useDraggableList({ onOrderChange }: UseDraggableListParams) {
	const itemsRef = useRef<InternalDndItemInfo[]>([]);

	const registerDndItem = useCallback(
		(index: number, dndItemInfo: DndItemInfo) => {
			const item = {
				...dndItemInfo,
				startY: 0,
			};
			itemsRef.current[index] = item;

			const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
				item.startY =
					item.elementRef.current!.getBoundingClientRect().top;

				const onMouseUp = (event: MouseEvent) => {
					let newIndex = 0;
					const draggableItemTop =
						item.elementRef.current!.getBoundingClientRect().top;
					for (let i = 0; i < itemsRef.current.length - 1; ++i) {
						if (i === index) {
							continue;
						}
						const currItem =
							itemsRef.current[i].elementRef.current!;
						if (
							currItem.getBoundingClientRect().top >
							draggableItemTop
						) {
							newIndex =
								draggableItemTop > item.startY ? i - 1 : i;
							break;
						}
						newIndex = i;
					}
					onOrderChange(index, newIndex);
					onDrop(event);

					window.removeEventListener("mousemove", onDrag);
					window.removeEventListener("mouseup", onMouseUp);
				};

				window.addEventListener("mousemove", onDrag);
				window.addEventListener("mouseup", onMouseUp);
			};

			return {
				onDragStart,
			};
		},
		[onOrderChange],
	);

	// const { createDeleteSlide } = useAppActions();
	// useEffect(() => {
	// 	const handleKeyDownEvent = (event: KeyboardEvent) => {
	// 		if (event.key == "Delete" && slideID != mainSlideID) {
	// 			createDeleteSlide(slideID);
	// 		}
	// 	};
	// 	window.addEventListener("keydown", handleKeyDownEvent);
	// });

	return {
		registerDndItem,
	};
}

export { useDraggableList };

export type { DndItemInfo, RegisterDndItemFn };
