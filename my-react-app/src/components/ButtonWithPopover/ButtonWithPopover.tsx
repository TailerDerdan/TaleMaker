import React, { useState, JSX } from "react";
import { Button, ButtonProps, ButtonType } from "../button/Button";
import styles from "./ButtonWithPopover.module.css";

type ButtonWithPopoverProps = {
	buttons: Array<ButtonProps>;
	title?: string;
	id: string;
	type: ButtonType;
	icon?: JSX.Element;
};

const ButtonWithPopover = (props: ButtonWithPopoverProps) => {
	const { title, buttons, id, type, icon } = props;
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
		return (
			<>
				<Button
					icon={icon}
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
	return <></>;
};

export { ButtonWithPopover };
