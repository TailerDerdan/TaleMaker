import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";

export enum ButtonType {
	Icon,
	Text,
}

type ButtonProps = {
	onClick: () => void;
	title?: string;
	id: string;
	type: ButtonType;
	icon?: JSX.Element | undefined;
};

const Button = (props: ButtonProps) => {
	const ButtonProps = props;
	if (ButtonProps.type == ButtonType.Text) {
		return (
			<div key={ButtonProps.id} className={styles.buttonWrapper}>
				<button
					key={ButtonProps.id}
					onClick={ButtonProps.onClick}
					className={styles.button}
				>
					{ButtonProps.title}
				</button>
			</div>
		);
	}
	if (ButtonProps.type == ButtonType.Icon) {
		return (
			<div key={ButtonProps.id} className={styles.buttonWrapper}>
				<button
					key={ButtonProps.id}
					onClick={ButtonProps.onClick}
					className={styles.buttonIcon}
				>
					{ButtonProps.icon}
				</button>
			</div>
		);
	}
	return <>12</>;
};

export { Button };
export type { ButtonProps };
