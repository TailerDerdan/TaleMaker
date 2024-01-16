import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { ButtonWithPopover } from "../../components/ButtonWithPopover/ButtonWithPopover";
import {
	Button,
	ButtonLocation,
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
import { MainEditor, Presentation, Slide } from "../../model/types";
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
import { ActiveToolBar } from "./activeToolBar";

function SaveFunc(presentation: Presentation) {
	const temp = document.createElement("a");
	const file = new Blob([JSON.stringify(presentation)], {
		type: "text/plain",
	});
	temp.href = URL.createObjectURL(file);
	temp.download = "presentation.json";
	document.body.appendChild(temp);
	temp.click();
	temp.remove();
}

type HeaderProps = {
	mainEditor: MainEditor;
};

const Header = (props: HeaderProps) => {
	const { mainEditor } = props;
	const slides = mainEditor.presentation.slides;
	const {
		createAddSlide,
		createAddTextBlock,
		createAddRectangle,
		createAddTriangle,
		createAddEllipse,
		createAddImage,
		createChangeBackgroundColor,
		createChangeBackgroundImage,
		createChangeMainEditorName,
	} = useAppActions();
	const [modalActiveForFile, setModalActiveForFile] = useState(false);
	const [modalActiveForImage, setModalActiveForImage] = useState(false);
	const [modalActiveForBackground, setModalActiveForBackground] =
		useState(false);
	const [inputForImage, setInputForImage] = useState("");
	const [inputForBackgroundImage, setinputForBackgroundImage] = useState("");
	const [inputForBackgroundColor, setinputForBackgroundColor] = useState("");
	const fileImage = useRef<HTMLInputElement>(null);
	const file = new Blob([JSON.stringify(mainEditor.presentation)], {
		type: "text/plain",
	});

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
					mainEditor.presentation.mainSlideID,
					CreateDefaultRectangleBlock(
						slides,
						mainEditor.presentation.mainSlideID,
					),
				);
			},
			title: "Прямоугольник",
			id: "buttonRectangle",
			type: ButtonType.Text,
		},
		{
			onClick: () => {
				createAddEllipse(
					mainEditor.presentation.mainSlideID,
					CreateDefaultEllipseBlock(
						slides,
						mainEditor.presentation.mainSlideID,
					),
				);
			},
			title: "Эллипс",
			id: "buttonEllipse",
			type: ButtonType.Text,
		},
		{
			onClick: () => {
				createAddTriangle(
					mainEditor.presentation.mainSlideID,
					CreateDefaultTriangleBlock(
						slides,
						mainEditor.presentation.mainSlideID,
					),
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
				style={{
					width: `${mainEditor.presentation.name.length * 5}px`,
				}}
			>
				<input
					type={"text"}
					value={mainEditor.presentation.name}
					onChange={(change) => {
						createChangeMainEditorName(change.target.value);
					}}
					className={styles.titlePresentation}
					style={{
						width: `${mainEditor.presentation.name.length * 10}px`,
					}}
				/>
			</div>
			<div className={styles.header__generalPurposeButtons}>
				<div className={styles.header__wrapperPopover}>
					<div className={styles.header__buttonsPopover}>
						<Button
							onClick={() => {
								setModalActiveForFile(true);
							}}
							title={"Файл"}
							id={"file"}
							type={ButtonType.Text}
						/>
						<Modal active={modalActiveForFile}>
							<div className={styles.buttonModal}>
								<Button
									onClick={() => console.log(1)}
									title={"Открыть"}
									id={"OpenButton"}
									type={ButtonType.Link}
									json={file}
								/>
								<Button
									onClick={() => {
										SaveFunc(mainEditor.presentation);
									}}
									title={"Сохранить"}
									id={"SaveButton"}
									type={ButtonType.InputField}
								/>
								<button
									onClick={() => setModalActiveForFile(false)}
									className={`${styles.buttonModal} ${styles.buttonCancel}`}
								>
									Отмена
								</button>
							</div>
						</Modal>
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
						title="Слайд-шоу"
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
								mainEditor.presentation.mainSlideID,
								CreateDefaultTextBlock(
									slides,
									mainEditor.presentation.mainSlideID,
								),
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
						<div className={styles.wrapperInputForImage}>
							<input
								type={"url"}
								placeholder={"Вставьте ссылку на изображение"}
								value={inputForImage}
								onChange={(event) =>
									setInputForImage(event.target.value)
								}
								className={styles.inputForImage}
							></input>
							<input
								ref={fileImage}
								type={"file"}
								onChange={() => {
									if (
										fileImage !== null &&
										fileImage.current !== null &&
										fileImage.current.files !== null
									) {
										setInputForImage(
											URL.createObjectURL(
												fileImage?.current?.files[0],
											),
										);
									}
								}}
								className={styles.inputForImage}
							/>
						</div>
						<div className={styles.wrapperForModalButton}>
							<div>
								<button
									onClick={() => {
										createAddImage(
											mainEditor.presentation.mainSlideID,
											CreateDefaultImageBlock(
												slides,
												inputForImage,
												mainEditor.presentation
													.mainSlideID,
											),
										);
										setInputForImage("");
										setModalActiveForImage(false);
									}}
									className={`${styles.buttonModal} ${styles.buttonCreate}`}
								>
									Вставить картинку
								</button>
							</div>
							<button
								onClick={() => setModalActiveForImage(false)}
								className={`${styles.buttonModal} ${styles.buttonCancel}`}
							>
								Отмена
							</button>
						</div>
					</Modal>
				</div>
				<div className={styles.header__toolboxButton}>
					<ButtonWithPopover
						buttons={buttonsShape}
						icon={<CreateGeomFigureIcon />}
						type={ButtonType.Icon}
						id="CreateGeomFigureIcon"
						typeOfLocation={ButtonLocation.ToolBar}
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
						<div className={styles.wrapperInputForImage}>
							<input
								type={"color"}
								value={inputForBackgroundColor}
								onChange={(event) =>
									setinputForBackgroundColor(
										event.target.value,
									)
								}
							></input>
							<input
								type={"url"}
								placeholder={"Вставьте ссылку на изображение"}
								value={inputForBackgroundImage}
								onChange={(event) =>
									setinputForBackgroundImage(
										event.target.value,
									)
								}
								className={styles.inputForImage}
							></input>
							<input
								ref={fileImage}
								type={"file"}
								onChange={() => {
									if (
										fileImage !== null &&
										fileImage.current !== null &&
										fileImage.current.files !== null
									) {
										setinputForBackgroundImage(
											URL.createObjectURL(
												fileImage?.current?.files[0],
											),
										);
									}
								}}
								className={styles.inputForImage}
							/>
						</div>
						<div className={styles.wrapperForModalButton}>
							<button
								onClick={() => {
									createChangeBackgroundColor(
										mainEditor.presentation.mainSlideID,
										inputForBackgroundColor,
									);
									setModalActiveForBackground(false);
								}}
								className={`${styles.buttonModal} ${styles.buttonSetColorObject}`}
							>
								Установить цвет
							</button>
							<button
								onClick={() => {
									createChangeBackgroundImage(
										mainEditor.presentation.mainSlideID,
										inputForBackgroundImage,
									);
									setinputForBackgroundImage("");
									setModalActiveForBackground(false);
								}}
								className={`${styles.buttonModal} ${styles.buttonCreate}`}
							>
								Вставить картинку
							</button>
							<button
								onClick={() =>
									setModalActiveForBackground(false)
								}
								className={`${styles.buttonModal} ${styles.buttonCancel}`}
							>
								Отмена
							</button>
						</div>
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
				<ActiveToolBar
					slides={slides}
					mainSlideID={mainEditor.presentation.mainSlideID}
				/>
			</div>
		</div>
	);
};

export { Header };
