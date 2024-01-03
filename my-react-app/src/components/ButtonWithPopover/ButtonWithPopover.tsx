import React, { useState } from "react";
import { Button, ButtonProps, ButtonType } from "../button/Button";
import styles from "./ButtonWithPopover.module.css";
import { type } from "os";

type ButtonWithPopoverProps ={
    buttons: Array<ButtonProps>;
    title?: string;
    id: string;
    type: ButtonType;
    icon?: JSX.Element | null;
};

const ButtonWithPopover = (props: ButtonWithPopoverProps) => {
    const { title, buttons, id, type} = props;
    const [opened, setOpened] = useState<boolean>(false);
    return (
        <>
            <Button title={title} onClick={() => setOpened(!opened)} id={id} type={type}/>
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
