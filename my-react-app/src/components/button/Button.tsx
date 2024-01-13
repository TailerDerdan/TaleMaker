import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";
import { link } from "fs";

enum ButtonType {
    Icon,
    Text,
    Link,
    InputField,
}

type ButtonProps = {
    onClick: () => void;
    title?: string;
    id: string;
    type: ButtonType;
    icon?: JSX.Element | undefined;
    json?: Blob | MediaSource
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
    if (ButtonProps.type == ButtonType.Link) {
        if (ButtonProps.json != null) {
            return (
                <a download={"presentation.json"} id={"downloadLink"} href={URL.createObjectURL(ButtonProps.json)}>Скачать</a>
            )
        }
    }
    if (ButtonProps.type == ButtonType.InputField) {
        return (
            <label>
                Скачать
                <input
                    type={"file"}
                    accept={".json"}
                    id={"OpenJson"}
                    onChange={() => {
                        const inputFile: HTMLInputElement | null = document.getElementById("OpenJson") as HTMLInputElement;
                        if (inputFile.files != null) {
                            inputFile.files[0].text().then((data) => {
                                const newData = JSON.parse(data);
                                console.log(newData)
                            })
                        }
                    }
                    } 
                    className={styles.header__hui} />
            </label>
        )
    }
    return <div />;
};

export { Button, ButtonType };
export type { ButtonProps };
