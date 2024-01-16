import { Slide } from "../../model/types";
import React, { useState } from "react";
import { useAppActions } from "../../redux/hooks";
import { Button, ButtonType } from "../../components/button/Button";
import {
	CreateBoldIcon,
	CreateFillBorderIcon,
	CreateFillIcon,
	CreateUnderlinedIcon,
} from "../../components/icons/toolbarIcons";
import { Accordion } from "../../components/DropDownDiv/dropDownDiv";
import styles from "./activeToolBar.module.css";

type activeToolBarProps = {
	slides: Slide[];
	mainSlideID: string;
};

export const ActiveToolBar = (props: activeToolBarProps) => {
	const { slides, mainSlideID } = props;
	const {
		createChangeGraphicObjectBorderColor,
		createChangeGraphicObjectColor,
		createChangeGraphicObjectBorderThickness,
		createChangeTextBlockFontFamily,
		createChangeTextBlockUnderlined,
		createChangeTextBlockColor,
		createChangeTextBlockFontSize,
		createChangeTextBlockBold,
	} = useAppActions();

	const mainSlide = slides.filter((slide) => {
		if (slide.id === mainSlideID) {
			return slide;
		}
	});
	if (mainSlide.length === 0) {
		return <></>;
	}
	const objectOnMainSlide = mainSlide[0]?.elements.filter((obj) => {
		return obj.isSelection;
	});
	if (objectOnMainSlide?.length !== 0) {
		if (
			objectOnMainSlide[0].type === "rectangle" ||
			objectOnMainSlide[0].type === "triangle" ||
			objectOnMainSlide[0].type === "ellipse"
		) {
			const [inputForColorObject, setInputForColorObject] = useState(
				objectOnMainSlide[0].color,
			);
			const [inputForBorderColorObject, setInputForBorderColorObject] =
				useState(objectOnMainSlide[0].colorBorder);
			const [
				inputForBorderThicknessObject,
				setInputForBorderThicknessObject,
			] = useState(objectOnMainSlide[0].borderThickness);
			const [modalActiveForColor, setModalActiveForColor] =
				useState(false);
			const [modalActiveForBorderColor, setModalActiveForBorderColor] =
				useState(false);

			const OnClickDecrement = () => {
				if (inputForBorderThicknessObject > 0) {
					setInputForBorderThicknessObject(
						inputForBorderThicknessObject - 2,
					);
					createChangeGraphicObjectBorderThickness(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForBorderThicknessObject,
					);
				}
				if (inputForBorderThicknessObject < 0) {
					setInputForBorderThicknessObject(0);
				}
			};

			const OnClickIncrement = () => {
				if (inputForBorderThicknessObject < 200) {
					setInputForBorderThicknessObject(
						inputForBorderThicknessObject + 2,
					);
					createChangeGraphicObjectBorderThickness(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForBorderThicknessObject,
					);
				}
				if (inputForBorderThicknessObject > 200) {
					setInputForBorderThicknessObject(200);
				}
			};

			return (
				<div className={styles.activeToolBar}>
					<div className={styles.buttonWrapperForToolBar}>
						<Button
							onClick={() => {
								setModalActiveForColor(true);
							}}
							id={"buttonForColor"}
							icon={CreateFillIcon()}
							type={ButtonType.Icon}
						/>
					</div>
					<Accordion active={modalActiveForColor}>
						<input
							type={"color"}
							value={inputForColorObject}
							onChange={(event) => {
								setInputForColorObject(event.target.value);
							}}
						/>
						<button
							onClick={() => {
								createChangeGraphicObjectColor(
									mainSlideID,
									objectOnMainSlide[0].id,
									inputForColorObject,
								);
								setModalActiveForColor(false);
							}}
							className={styles.buttonSetColor}
						>
							Установить цвет
						</button>
					</Accordion>
					<div className={styles.buttonWrapperForToolBar}>
						<Button
							onClick={() => {
								setModalActiveForBorderColor(true);
							}}
							id={"buttonForColor"}
							icon={CreateFillBorderIcon()}
							type={ButtonType.Icon}
						/>
					</div>
					<Accordion active={modalActiveForBorderColor}>
						<input
							type={"color"}
							value={inputForBorderColorObject}
							onChange={(event) => {
								setInputForBorderColorObject(
									event.target.value,
								);
							}}
						/>
						<button
							onClick={() => {
								createChangeGraphicObjectBorderColor(
									mainSlideID,
									objectOnMainSlide[0].id,
									inputForBorderColorObject,
								);
								setModalActiveForBorderColor(false);
							}}
							className={styles.buttonSetColor}
						>
							Установить цвет
						</button>
					</Accordion>
					<div className={styles.numberInputContainer}>
						<div className={styles.buttonWrapperForChangedInput}>
							<button
								className={`${styles.buttonChangedInputDecrement} ${styles.buttonChangedInput}`}
								onClick={OnClickDecrement}
							></button>
						</div>
						<div className={styles.numberInput}>
							<input
								type={"number"}
								value={inputForBorderThicknessObject}
								onChange={(event) => {
									setInputForBorderThicknessObject(
										Number(event.target.value),
									);
									createChangeGraphicObjectBorderThickness(
										mainSlideID,
										objectOnMainSlide[0].id,
										inputForBorderThicknessObject,
									);
								}}
							/>
						</div>
						<div className={styles.buttonWrapperForChangedInput}>
							<button
								className={`${styles.buttonChangedInput} ${styles.buttonChangedInputIncrement}`}
								onClick={OnClickIncrement}
							></button>
						</div>
					</div>
				</div>
			);
		}
		if (objectOnMainSlide[0].type === "text") {
			const [inputForColorObject, setInputForColorObject] = useState(
				objectOnMainSlide[0].color,
			);
			const [inputForFontFamilyObject, setInputForFontFamilyObject] =
				useState(objectOnMainSlide[0].fontFamily);
			const [inputForFontSizeObject, setInputForFontSizeObject] =
				useState(objectOnMainSlide[0].fontSize);
			const [inputForBoldObject, setInputForBoldObject] = useState(
				objectOnMainSlide[0].bold,
			);
			const [inputForUnderLinedObject, setInputForUnderLinedObject] =
				useState(objectOnMainSlide[0].underlined);
			const [modalActiveForColor, setModalActiveForColor] =
				useState(false);

			const onClickBold = () => {
				if (!inputForBoldObject) {
					setInputForBoldObject(true);
					createChangeTextBlockBold(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForBoldObject,
					);
				}
				if (inputForBoldObject) {
					setInputForBoldObject(false);
					createChangeTextBlockBold(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForBoldObject,
					);
				}
			};

			const onClickUnderlined = () => {
				if (!inputForUnderLinedObject) {
					setInputForUnderLinedObject(true);
					createChangeTextBlockUnderlined(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForUnderLinedObject,
					);
				}
				if (inputForUnderLinedObject) {
					setInputForUnderLinedObject(false);
					createChangeTextBlockUnderlined(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForUnderLinedObject,
					);
				}
			};

			const OnClickDecrement = () => {
				if (inputForFontSizeObject > 0) {
					setInputForFontSizeObject(inputForFontSizeObject - 2);
					createChangeTextBlockFontSize(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForFontSizeObject,
					);
				}
				if (inputForFontSizeObject < 0) {
					setInputForFontSizeObject(0);
				}
			};

			const OnClickIncrement = () => {
				if (inputForFontSizeObject < 200) {
					setInputForFontSizeObject(inputForFontSizeObject + 2);
					createChangeTextBlockFontSize(
						mainSlideID,
						objectOnMainSlide[0].id,
						inputForFontSizeObject,
					);
				}
				if (inputForFontSizeObject > 200) {
					setInputForFontSizeObject(200);
				}
			};

			return (
				<div className={styles.activeToolBar}>
					<div className={styles.buttonWrapperForToolBar}>
						<Button
							onClick={() => {
								setModalActiveForColor(true);
							}}
							id={"buttonForColor"}
							icon={CreateFillIcon()}
							type={ButtonType.Icon}
						/>
					</div>
					<Accordion active={modalActiveForColor}>
						<input
							type={"color"}
							value={inputForColorObject}
							onChange={(event) => {
								setInputForColorObject(event.target.value);
							}}
						/>
						<button
							onClick={() => {
								createChangeTextBlockColor(
									mainSlideID,
									objectOnMainSlide[0].id,
									inputForColorObject,
								);
								setModalActiveForColor(false);
							}}
							className={styles.buttonSetColor}
						>
							Установить цвет
						</button>
					</Accordion>
					<div className={styles.selectWrapper}>
						<select
							onChange={(event) => {
								setInputForFontFamilyObject(event.target.value);
								createChangeTextBlockFontFamily(
									mainSlideID,
									objectOnMainSlide[0].id,
									inputForFontFamilyObject,
								);
							}}
							className={styles.selectForFontFamily}
						>
							<option>Arial</option>
							<option>Helvetica</option>
							<option>Verdana</option>
							<option>Trebuchet</option>
							<option>Gill sans</option>
							<option>Noto Sans</option>
							<option>Times New Roman</option>
							<option>Caveat</option>
							<option>Roboto</option>
							<option>Comfortaa</option>
							<option>Comic Sans</option>
						</select>
					</div>
					<div className={styles.numberInputContainer}>
						<div className={styles.buttonWrapperForChangedInput}>
							<button
								className={`${styles.buttonChangedInputDecrement} ${styles.buttonChangedInput}`}
								onClick={OnClickDecrement}
							></button>
						</div>
						<div className={styles.numberInput}>
							<input
								type={"number"}
								value={inputForFontSizeObject}
								onChange={(event) => {
									setInputForFontSizeObject(
										Number(event.target.value),
									);
									createChangeTextBlockFontSize(
										mainSlideID,
										objectOnMainSlide[0].id,
										inputForFontSizeObject,
									);
								}}
							/>
						</div>
						<div className={styles.buttonWrapperForChangedInput}>
							<button
								className={`${styles.buttonChangedInput} ${styles.buttonChangedInputIncrement}`}
								onClick={OnClickIncrement}
							></button>
						</div>
					</div>
					<div className={styles.buttonWrapperForToolBar}>
						<Button
							onClick={onClickBold}
							id={"buttonTextBold"}
							type={ButtonType.Icon}
							icon={CreateBoldIcon()}
						/>
					</div>
					<div className={styles.buttonWrapperForToolBar}>
						<Button
							onClick={onClickUnderlined}
							id={"buttonTextUnderlined"}
							type={ButtonType.Icon}
							icon={CreateUnderlinedIcon()}
						/>
					</div>
				</div>
			);
		}
	}
	return <></>;
};
