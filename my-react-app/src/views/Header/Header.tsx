import React, { useState } from "react";
import styles from "./Header.module.css";
import { ButtonWithPopover } from "../../components/ButtonWithPopover/ButtonWithPopover";
import {
	Button,
	ButtonProps,
	ButtonType,
} from "../../components/button/Button";
import {
	CreateGeomFigureIcon,
	CreateImageIcon,
	CreateLineIcon,
	CreateTextBoxIcon,
	NewSlideIcon,
	RedoIcon,
	UndoIcon,
} from "../../components/icons/toolbarIcons";
import { Slide } from "../../model/types";
import { useAppActions, useAppSelector } from "../../redux/hooks";
import {
	CreateDefaultEllipseBlock,
	CreateDefaultImageBlock,
	CreateDefaultRectangleBlock,
	CreateDefaultSlide,
	CreateDefaultTextBlock,
	CreateDefaultTriangleBlock,
} from "../../data/createDefaultObject";
import { Modal } from "../../components/modalWindow/modalWindow";

function SaveFunc(slides: Slide[]) {
	const temp = document.createElement("a");
	const file = new Blob([JSON.stringify(slides)], {
		type: "text/plain",
	});
	temp.href = URL.createObjectURL(file);
	temp.download = "presentation.json";
	document.body.appendChild(temp);
	temp.click();
	temp.remove();
}

const Header = () => {
	const [name, setName] = useState<string>("Презентация");
	const slides = useAppSelector((state) => state.slides);
	const {
		createAddSlide,
		createAddTextBlock,
		createAddRectangle,
		createAddTriangle,
		createAddEllipse,
		createAddImage,
		createChangeBackgroundColor,
		createChangeBackgroundImage,
	} = useAppActions();
	const [modalActiveForImage, setModalActiveForImage] = useState(false);
	const [modalActiveForBackground, setModalActiveForBackground] =
		useState(false);
	const [inputForImage, setInputForImage] = useState("");
	const [inputForBackgroundImage, setinputForBackgroundImage] = useState("");
	const [inputForBackgroundColor, setinputForBackgroundColor] = useState("");

	if (slides.length == 0) {
		createAddSlide(CreateDefaultSlide(slides));
	}

	const buttonsFile: Array<ButtonProps> = [
		{
			onClick: () => {
				console.log(1);
			},
			title: "Открыть",
			id: "OpenButton",
			type: ButtonType.Text,
		},
		{
			onClick: () => {
				SaveFunc(slides);
			},
			title: "Сохранить",
			id: "SaveButton",
			type: ButtonType.Text,
		},
	];
	const buttonsCorrect: Array<ButtonProps> = [
		{
			onClick: () => console.log("xxxx"),
			title: "xxxx",
			id: "xxxx",
			type: ButtonType.Text,
		},
		{
			onClick: () => console.log("SSSS"),
			title: "SSSS",
			id: "SSSS",
			type: ButtonType.Text,
		},
		{
			onClick: () => console.log("SSQSS"),
			title: "SSQSS",
			id: "SSQSS",
			type: ButtonType.Text,
		},
	];
	const buttonsInsert: Array<ButtonProps> = [
		{
			onClick: () => console.log("xxxx"),
			title: "xxxx",
			id: "xxxx",
			type: ButtonType.Text,
		},
		{
			onClick: () => console.log("SSSS"),
			title: "SSSS",
			id: "SSSS",
			type: ButtonType.Text,
		},
		{
			onClick: () => console.log("SSQSS"),
			title: "SSQSS",
			id: "SSQSS",
			type: ButtonType.Text,
		},
	];
	const buttonsSlide: Array<ButtonProps> = [
		{
			onClick: () => console.log("xxxx"),
			title: "xxxx",
			id: "xxxx",
			type: ButtonType.Text,
		},
		{
			onClick: () => console.log("SSSS"),
			title: "SSSS",
			id: "SSSS",
			type: ButtonType.Text,
		},
		{
			onClick: () => console.log("SSQSS"),
			title: "SSQSS",
			id: "SSQSS",
			type: ButtonType.Text,
		},
	];

	const buttonsShape: Array<ButtonProps> = [
		{
			onClick: () => {
				createAddRectangle(
					slides[0].mainSlideID,
					CreateDefaultRectangleBlock(slides),
				);
			},
			title: "Прямоугольник",
			id: "buttonRectangle",
			type: ButtonType.Text,
		},
		{
			onClick: () => {
				createAddEllipse(
					slides[0].mainSlideID,
					CreateDefaultEllipseBlock(slides),
				);
			},
			title: "Эллипс",
			id: "buttonEllipse",
			type: ButtonType.Text,
		},
		{
			onClick: () => {
				createAddTriangle(
					slides[0].mainSlideID,
					CreateDefaultTriangleBlock(slides),
				);
			},
			title: "Треугольник",
			id: "buttonTriangle",
			type: ButtonType.Text,
		},
	];

	return (
		<div className={styles.header}>
			<div
				className={styles.header__wrapper__titlePresentation}
				style={{ width: `${name.length * 5}px` }}
			>
				<input
					value={name}
					onChange={(change) => {
						setName(change.target.value);
					}}
					className={styles.titlePresentation}
					style={{
						width: `${name.length * 10}px`,
					}}
				/>
			</div>
			<div className={styles.header__generalPurposeButtons}>
				<div className={styles.header__wrapperPopover}>
					<div className={styles.header__buttonsPopover}>
						<ButtonWithPopover
							title={"Файл"}
							buttons={buttonsFile}
							id={"file"}
							type={ButtonType.Text}
						/>
					</div>
					<div className={styles.header__buttonsPopover}>
						<ButtonWithPopover
							title={"Правка"}
							buttons={buttonsCorrect}
							id={"correct"}
							type={ButtonType.Text}
						/>
					</div>
					<div className={styles.header__buttonsPopover}>
						<ButtonWithPopover
							title={"Вставка"}
							buttons={buttonsInsert}
							id={"insert"}
							type={ButtonType.Text}
						/>
					</div>
					<div className={styles.header__buttonsPopover}>
						<ButtonWithPopover
							title={"Слайд"}
							buttons={buttonsSlide}
							id={"slide"}
							type={ButtonType.Text}
						/>
					</div>
				</div>
				<div className={styles.header__buttonSlideShow}>
					<Button
						onClick={() => {
							console.log("sss");
						}}
						title="Слайд шоу"
						id="slideShow"
						type={ButtonType.Text}
					/>
				</div>
			</div>
			<div className={styles.header__toolbox}>
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							createAddSlide(CreateDefaultSlide(slides));
						}}
						icon={<NewSlideIcon />}
						id="newSlideIcon"
						type={ButtonType.Icon}
					/>
				</div>
				<div className={styles.header__toolboxSeparator} />
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							console.log(1);
						}}
						icon={<UndoIcon />}
						id="UndoIcon"
						type={ButtonType.Icon}
					/>
				</div>
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							console.log(1);
						}}
						icon={<RedoIcon />}
						id="RedoIcon"
						type={ButtonType.Icon}
					/>
				</div>
				<div className={styles.header__toolboxSeparator} />
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							createAddTextBlock(
								slides[0].mainSlideID,
								CreateDefaultTextBlock(slides),
							);
						}}
						icon={<CreateTextBoxIcon />}
						id="CreateTextBoxIcon"
						type={ButtonType.Icon}
					/>
				</div>
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							setModalActiveForImage(true);
						}}
						icon={<CreateImageIcon />}
						id="CreateImageIcon"
						type={ButtonType.Icon}
					/>
					<Modal active={modalActiveForImage}>
						<input
							placeholder={"Вставьте ссылку на изображение"}
							value={inputForImage}
							onChange={(event) =>
								setInputForImage(event.target.value)
							}
						></input>
						<button
							onClick={() => {
								// if (checkImage(inputForImage)) {
								createAddImage(
									slides[0].mainSlideID,
									CreateDefaultImageBlock(
										slides,
										inputForImage,
									),
								);
								setModalActiveForImage(false);
								// }
							}}
						>
							Вставить картинку
						</button>
						<button onClick={() => setModalActiveForImage(false)}>
							Отмена
						</button>
					</Modal>
				</div>
				<div className={styles.header__toolboxButton}>
					<ButtonWithPopover
						buttons={buttonsShape}
						icon={<CreateGeomFigureIcon />}
						type={ButtonType.Icon}
						id="CreateGeomFigureIcon"
					/>
				</div>
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							console.log(1);
						}}
						icon={<CreateLineIcon />}
						id="CreateLineIcon"
						type={ButtonType.Icon}
					/>
				</div>
				<div className={styles.header__toolboxSeparator} />
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							setModalActiveForBackground(true);
						}}
						title="Фон"
						id="CreateLineIcon"
						type={ButtonType.Text}
					/>
					<Modal active={modalActiveForBackground}>
						<input
							placeholder={"Вставьте ссылку на изображение"}
							value={inputForBackgroundImage}
							onChange={(event) =>
								setinputForBackgroundImage(event.target.value)
							}
						></input>
						<button
							onClick={() => {
								createChangeBackgroundImage(
									slides[0].mainSlideID,
									inputForBackgroundImage,
								);
								setModalActiveForBackground(false);
							}}
						>
							Вставить картинку
						</button>
						<input
							type={"color"}
							value={inputForBackgroundColor}
							onChange={(event) =>
								setinputForBackgroundColor(event.target.value)
							}
						></input>
						<button
							onClick={() => {
								createChangeBackgroundColor(
									slides[0].mainSlideID,
									inputForBackgroundColor,
								);
								setModalActiveForBackground(false);
							}}
						>
							Установить цвет
						</button>
						<button
							onClick={() => setModalActiveForBackground(false)}
						>
							Отмена
						</button>
					</Modal>
				</div>
				<div className={styles.header__toolboxSeparator} />
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							console.log(1);
						}}
						title="Переход"
						id="CreateLineIcon"
						type={ButtonType.Text}
					/>
				</div>
			</div>
		</div>
	);
};

export { Header };
