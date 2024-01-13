import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";
import { link } from "fs";

enum ButtonType {
    Icon,
    Text,
    Link,
    InputField,
    ToolBButton,
}

const downloadName = "presentation.json"

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
    if (ButtonProps.type == ButtonType.ToolBButton) {
        return (
            <div key={ButtonProps.id} className={styles.buttonWrapper}>
                <button
                    key={ButtonProps.id}
                    onClick={ButtonProps.onClick}
                    className={styles.buttonIcon}
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
                <div key={ButtonProps.id} className={styles.buttonWrapper}>
                    <a download={downloadName} id={ButtonProps.id} href={URL.createObjectURL(ButtonProps.json)} className={styles.buttonLink}>Скачать</a>
                </div>
            )
        }
    }
    if (ButtonProps.type == ButtonType.InputField) {
        return (
            <label>
                <input
                    type={"file"}
                    title={"Сохранить"}
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
                />
            </label>
        )
    }
    return <div />;
};

export { Button, ButtonType };
export type { ButtonProps };
