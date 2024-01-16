import React, { RefObject, useEffect, useRef, useState } from "react";
import { ObjectOnSlide, Slide } from "../../model/types";
import styles from "./SlideViewForSlideBar.module.css";
import { RegisterDndItemFn } from "../../hooks/useDdDForSlideBar";
import { useAppActions } from "../../redux/hooks";
import { useSelectionForSlideBar } from "../../hooks/useSelectionForSlideBar";
import { RectangleView } from "../../components/Rectangle";
import { EllipseView } from "../../components/Ellipse";
import { TextBlockView } from "../../components/TextBlock/TextBlock";
import { ImageView } from "../../components/ImageView";
import { TriangleView } from "../../components/Triangle";

type SlideProps = Slide & {
	registerDndItem: RegisterDndItemFn;
	index: number;
	scale: number;
	refOnList: RefObject<HTMLDivElement>;
};

function SlideViewForSlideBar(props: SlideProps) {
	const {
		id,
		background,
		typeBackground,
		elements,
		chosenElements,
		transition,
		animations,
		width,
		height,
		registerDndItem,
		index,
		scale,
		isSelection,
		refOnList,
	} = props;

	const widthSlide = width * document.documentElement.clientWidth;
	const heightSlide = height * document.documentElement.clientHeight;
	const { createMainSlide, createChangeSlideSelection } = useAppActions();

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		useSelectionForSlideBar({
			slideID: id,
			refOnParent: refOnList,
			refOnObject: ref,
			setDown: createChangeSlideSelection,
		});
	}, [isSelection]);

	useEffect(() => {
		const { onDragStart } = registerDndItem(index, {
			elementRef: ref,
		});
		const onMouseDown = (mouseDownEvent: MouseEvent) => {
			createMainSlide(id);
			onDragStart({
				onDrag: (dragEvent) => {
					ref.current!.style.position = "absolute";
					ref.current!.style.zIndex = "1";
					ref.current!.style.boxShadow = "black 2px 2px 4px";
					ref.current!.style.top = `${
						(dragEvent.pageY - mouseDownEvent.pageY) / scale
					}px`;
				},
				onDrop: (dropEvent) => {
					ref.current!.style.position = "";
					ref.current!.style.zIndex = "";
					ref.current!.style.boxShadow = "";
					ref.current!.style.top = "";
				},
			});
		};
		const control = ref.current!;
		control.addEventListener("mousedown", onMouseDown);
		return () => control.removeEventListener("mousedown", onMouseDown);
	}, [index, registerDndItem]);

	return (
		<div
			key={id}
			ref={ref}
			className={styles.slideStyles}
			style={{
				width: `${widthSlide}px`,
				height: `${heightSlide}px`,
				backgroundImage: typeBackground == "image" ? background : "",
				backgroundColor: typeBackground == "color" ? background : "",
				border: isSelection ? "4px solid rgba(125, 66, 110, 1)" : "",
			}}
		>
			{elements.map((elem) => {
				switch (elem.type) {
					case "rectangle":
						return (
							<div
								key={elem.id}
								style={{
									position: "absolute",
									top: `${elem.point.y}px`,
									left: `${elem.point.x}px`,
									width: `${elem.width}px`,
									height: `${elem.height}px`,
									transform: `rotate(${elem.angleRotate})`,
									opacity: elem.opacity,
								}}
							>
								<div
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
									}}
								>
									<RectangleView {...elem} />
								</div>
							</div>
						);
					case "ellipse":
						return (
							<div
								key={elem.id}
								style={{
									position: "absolute",
									top: `${elem.point.y}px`,
									left: `${elem.point.x}px`,
									width: `${elem.width}px`,
									height: `${elem.height}px`,
									transform: `rotate(${elem.angleRotate})`,
									opacity: elem.opacity,
								}}
							>
								<div
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
									}}
								>
									<EllipseView {...elem} />
								</div>
							</div>
						);
					case "text":
						return (
							<div
								key={elem.id}
								style={{
									position: "absolute",
									top: `${elem.point.y}px`,
									left: `${elem.point.x}px`,
									width: `${elem.width}px`,
									height: `${elem.height}px`,
									transform: `rotate(${elem.angleRotate})`,
									opacity: elem.opacity,
								}}
							>
								<div
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
									}}
								>
									<TextBlockView {...elem} slideID={id} />
								</div>
							</div>
						);
					case "image":
						return (
							<div
								key={elem.id}
								style={{
									position: "absolute",
									top: `${elem.point.y}px`,
									left: `${elem.point.x}px`,
									width: `${elem.width}px`,
									height: `${elem.height}px`,
									transform: `rotate(${elem.angleRotate})`,
									opacity: elem.opacity,
								}}
							>
								<div
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
									}}
								>
									<ImageView {...elem} />
								</div>
							</div>
						);
					case "triangle":
						return (
							<div
								key={elem.id}
								style={{
									position: "absolute",
									top: `${elem.point.y}px`,
									left: `${elem.point.x}px`,
									width: `${elem.width}px`,
									height: `${elem.height}px`,
									transform: `rotate(${elem.angleRotate})`,
									opacity: elem.opacity,
								}}
							>
								<div
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
									}}
								>
									<TriangleView {...elem} />
								</div>
							</div>
						);
					default:
						return <></>;
				}
			})}
		</div>
	);
}

export { SlideViewForSlideBar };
export type { SlideProps };
