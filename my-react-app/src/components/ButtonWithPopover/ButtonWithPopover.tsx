import { useState } from "react";
import { Button, ButtonProps } from "../button/Button";
import styles from "./ButtonWithPopover.module.css";

type ButtonWithPopoverProps = {
    title: string;
    buttons: Array<ButtonProps>;
};

const ButtonWithPopover = (props: ButtonWithPopoverProps) => {
    const { title, buttons } = props;
    const [opened, setOpened] = useState<boolean>(false);
    return (
        <>
            <Button title={title} onClick={() => setOpened(!opened)} />
            {opened ? (
                <div className={styles.popover}>
                    {buttons.map((el) => (
                        <Button {...el} />
                    ))}
                </div>
            ) : null}
        </>
    );
};

export { ButtonWithPopover };
