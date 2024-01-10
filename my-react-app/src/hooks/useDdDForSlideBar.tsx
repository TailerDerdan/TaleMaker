import { RefObject, useCallback, useRef } from "react";

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
					const newIndex = 0;
					const draggableItemTop =
						item.elementRef.current!.getBoundingClientRect().top;
					// for (let i = 0; i < itemsRef.current.length - 1; ++i) {
					// 	if (i === index) {
					// 		continue;
					// 	}
					// 	console.log(item, 6);
					// 	const currItem =
					// 		itemsRef.current[i].elementRef.current!;
					// 	if (
					// 		currItem.getBoundingClientRect().top >
					// 		draggableItemTop
					// 	) {
					// 		newIndex =
					// 			draggableItemTop > item.startY ? i - 1 : i;
					// 		break;
					// 	}
					// 	newIndex = i;
					// }
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

	return {
		registerDndItem,
	};
}

export { useDraggableList };

export type { DndItemInfo, RegisterDndItemFn };
