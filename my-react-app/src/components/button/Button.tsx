import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    onClick: () => void;
    title: string;
    id: string;
};

const Button = (props: ButtonProps) => {
    const { onClick, title, id } = props;

    return (
        <div key={id} className={styles.buttonWrapper}>
            <button key={id} onClick={onClick} className={styles.button}>
                {title}
            </button>
        </div>
    );
};

export { Button };
export type { ButtonProps };
