import React, { ReactNode } from "react";
import styles from "./modal.module.css";
import { CreateDefaultImageBlock } from "../../data/createDefaultObject";
import { Slide } from "../../model/types";
import { useAppActions } from "../../redux/hooks";

type ModalWindowProps = {
	active: boolean;
	children: ReactNode[] | ReactNode;
};

function checkImage(url: string) {
	const regex = "/^https?:\\/\\/.*\\/.*\\.(png|gif|webp|jpeg|jpg)\\??.*$/gmi";
	return !!url.match(regex);
}

export const Modal = (props: ModalWindowProps) => {
	const { active, children } = props;
	return (
		<div
			className={
				active ? `${styles.model} ${styles.active}` : styles.model
			}
		>
			<div
				className={
					active
						? `${styles.model__content} ${styles.active}`
						: styles.model__content
				}
			>
				{children}
			</div>
		</div>
	);
};
