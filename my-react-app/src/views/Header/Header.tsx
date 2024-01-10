import React, { useEffect, useState } from "react";
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
	CreateTextBoxIcon,
	NewSlideIcon,
	RedoIcon,
	UndoIcon,
	CreateLineIcon,
} from "../../components/icons/toolbarIcons";
import { Slide, TransionType } from "../../model/types";
import { SlideProps } from "../../components/slide/Slide";
import { useAppActions, useAppSelector } from "../../redux/hooks";

const defaultSlide: Slide = {
	typeBackground: "color",
	background: "#699DF9",
	id: "",
	elements: [],
	chosenElements: [],
	transition: TransionType.Default,
	width: 0.66,
	height: 0.64,
};

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

	const { createAddSlide } = useAppActions();
	const newSlide = { ...defaultSlide };

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
						console.log(name.length);
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
							createAddSlide(newSlide);
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
							console.log(1);
						}}
						icon={<CreateTextBoxIcon />}
						id="CreateTextBoxIcon"
						type={ButtonType.Icon}
					/>
				</div>
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							console.log(1);
						}}
						icon={<CreateImageIcon />}
						id="CreateImageIcon"
						type={ButtonType.Icon}
					/>
				</div>
				<div className={styles.header__toolboxButton}>
					<Button
						onClick={() => {
							console.log(1);
						}}
						icon={<CreateGeomFigureIcon />}
						id="CreateGeomFigureIcon"
						type={ButtonType.Icon}
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
							console.log(1);
						}}
						title="Фон"
						id="CreateLineIcon"
						type={ButtonType.Text}
					/>
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
