import React, { ReactNode } from "react";
import styles from "./dropDownDiv.module.css";

type AccordionProps = {
	children: ReactNode;
	active: boolean;
};

export const Accordion = (props: AccordionProps) => {
	const { children, active } = props;
	return (
		<div
			className={
				active ? `${styles.panel} ${styles.active}` : styles.panel
			}
		>
			{children}
		</div>
	);
};
