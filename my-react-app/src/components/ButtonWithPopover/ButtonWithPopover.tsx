import React, { useState, JSX } from "react";
import {
	Button,
	ButtonLocation,
	ButtonProps,
	ButtonType,
} from "../button/Button";
import styles from "./ButtonWithPopover.module.css";

type ButtonWithPopoverProps = {
	buttons: Array<ButtonProps>;
	title?: string;
	id: string;
	type: ButtonType;
	icon?: JSX.Element;
	typeOfLocation?: ButtonLocation;
};

const ButtonWithPopover = (props: ButtonWithPopoverProps) => {
	const { title, buttons, id, type, icon, typeOfLocation } = props;
	const [opened, setOpened] = useState<boolean>(false);
	if (type == ButtonType.Text) {
		return (
			<>
				<Button
					title={title}
					onClick={() => setOpened(!opened)}
					id={id}
					type={type}
				/>
				{opened ? (
					<div className={styles.popover}>
						{buttons.map((el, i) => (
							<Button {...el} key={id + i} />
						))}
					</div>
				) : null}
			</>
		);
	}
	if (type == ButtonType.Icon) {
		let styleForButton;
		if (typeOfLocation === ButtonLocation.ToolBar) {
			styleForButton = styles.popoverForToolBar;
			console.log(1);
		} else {
			styleForButton = styles.popover;
		}
		return (
			<>
				<Button
					icon={icon}
					onClick={() => setOpened(!opened)}
					id={id}
					type={type}
				/>
				{opened ? (
					<div className={styleForButton}>
						{buttons.map((el, i) => (
							<Button
								{...el}
								key={id + i}
								typeLocation={typeOfLocation}
							/>
						))}
					</div>
				) : null}
			</>
		);
	}
	return <></>;
};

export { ButtonWithPopover };
