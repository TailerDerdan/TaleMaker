import React, { useState } from "react";
import { Button, ButtonProps } from "../button/Button";
import styles from "./ButtonWithPopover.module.css";

type ButtonWithPopoverProps = {
	title: string;
	buttons: Array<ButtonProps>;
	id: string;
};

const ButtonWithPopover = (props: ButtonWithPopoverProps) => {
	const { title, buttons, id } = props;
	const [opened, setOpened] = useState<boolean>(false);
	return (
		<>
			<Button title={title} onClick={() => setOpened(!opened)} id={id} />
			{opened ? (
				<div className={styles.popover}>
					{buttons.map((el) => (
						<Button {...el} key={id} />
					))}
				</div>
			) : null}
		</>
	);
};

export { ButtonWithPopover };
