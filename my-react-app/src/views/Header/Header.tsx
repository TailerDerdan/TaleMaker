import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { ButtonWithPopover } from "../../components/ButtonWithPopover/ButtonWithPopover";
import { Button, ButtonProps } from "../../components/button/Button";

const Header = () => {
    const [name, setName] = useState<string>("Презентация");

    const buttonsFile: Array<ButtonProps> = [
        {
            onClick: () => console.log("xxxx"),
            title: "xxxx",
            id: "xxxx",
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
            id: "SSSS",
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
            id: "SSQSS",
        },
    ];

    const buttonsCorrect: Array<ButtonProps> = [
        {
            onClick: () => console.log("xxxx"),
            title: "xxxx",
            id: "xxxx",
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
            id: "SSSS",
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
            id: "SSQSS",
        },
    ];

    const buttonsInsert: Array<ButtonProps> = [
        {
            onClick: () => console.log("xxxx"),
            title: "xxxx",
            id: "xxxx",
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
            id: "SSSS",
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
            id: "SSQSS",
        },
    ];

    const buttonsSlide: Array<ButtonProps> = [
        {
            onClick: () => console.log("xxxx"),
            title: "xxxx",
            id: "xxxx",
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
            id: "SSSS",
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
            id: "SSQSS",
        },
    ];

    return (
        <div className={styles.header}>
            <div
                className={styles.header__wrapper__titlePresentation}
                style={{ width: `${name.length * 5}px` }}
            >
                <input
                    value={name}
                    onChange={(change) => {
                        setName(change.target.value);
                        console.log(name.length);
                    }}
                    className={styles.titlePresentation}
                    style={{
                        width: `${name.length * 10}px`,
                    }}
                />
            </div>
            <div className={styles.header__generalPurposeButtons}>
                <div className={styles.header__wrapperPopover}>
                    <div className={styles.header__buttonsPopover}>
                        <ButtonWithPopover
                            title={"Файл"}
                            buttons={buttonsFile}
                            id={"file"}
                        />
                    </div>
                    <div className={styles.header__buttonsPopover}>
                        <ButtonWithPopover
                            title={"Правка"}
                            buttons={buttonsCorrect}
                            id={"correct"}
                        />
                    </div>
                    <div className={styles.header__buttonsPopover}>
                        <ButtonWithPopover
                            title={"Вставка"}
                            buttons={buttonsInsert}
                            id={"insert"}
                        />
                    </div>
                    <div className={styles.header__buttonsPopover}>
                        <ButtonWithPopover
                            title={"Слайд"}
                            buttons={buttonsSlide}
                            id={"slide"}
                        />
                    </div>
                </div>
                <div className={styles.header__buttonSlideShow}>
                    <Button
                        onClick={() => {
                            console.log("sss");
                        }}
                        title="Слайд шоу"
                        id="slideShow"
                    />
                </div>
            </div>
            <div className={styles.header__necessary}></div>
        </div>
    );
};

export { Header };
