import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { ButtonWithPopover } from "../../components/ButtonWithPopover/ButtonWithPopover";
import {
    Button,
    ButtonProps,
    ButtonType,
} from "../../components/button/Button";
import {
    CreateGeomFigureIcon,
    CreateImageIcon,
    CreateTextBoxIcon,
    NewSlideIcon,
    RedoIcon,
    UndoIcon,
    CreateLineIcon,
} from "../../components/icons/toolbarIcons";
import { Slide } from "../../model/types";
import { SlideProps } from "../../components/slide/Slide";

type HeaderProps = {
    addSlideFunc: () => void;
    slides: SlideProps[];
};

const Header = (props: HeaderProps) => {
    const [name, setName] = useState<string>("Презентация");
    const file = new Blob([JSON.stringify(props.slides)], {type: "text/plain"})

    const buttonsFile: Array<ButtonProps> = [
        {
            onClick: () => {},
            title: "Открыть",
            id: "OpenButton",
            type: ButtonType.Link,
            json: file,

        },
        {
            onClick: () => {},
            title: "Сохранить",
            id: "SaveButton",
            type: ButtonType.InputField,
        },
    ];

    const buttonsCorrect: Array<ButtonProps> = [
        {
            onClick: () => console.log("xxxx"),
            title: "xxxx",
            id: "xxxx",
            type: ButtonType.Text,
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
            id: "SSSS",
            type: ButtonType.Text,
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
            id: "SSQSS",
            type: ButtonType.Text,
        },
    ];

    const buttonsInsert: Array<ButtonProps> = [
        {
            onClick: () => console.log("xxxx"),
            title: "xxxx",
            id: "xxxx",
            type: ButtonType.Text,
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
            id: "SSSS",
            type: ButtonType.Text,
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
            id: "SSQSS",
            type: ButtonType.Text,
        },
    ];

    const buttonsSlide: Array<ButtonProps> = [
        {
            onClick: () => console.log("xxxx"),
            title: "xxxx",
            id: "xxxx",
            type: ButtonType.Text,
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
            id: "SSSS",
            type: ButtonType.Text,
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
            id: "SSQSS",
            type: ButtonType.Text,
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
                            type={ButtonType.Text}
                        />
                    </div>
                    <div className={styles.header__buttonsPopover}>
                        <ButtonWithPopover
                            title={"Правка"}
                            buttons={buttonsCorrect}
                            id={"correct"}
                            type={ButtonType.Text}
                        />
                    </div>
                    <div className={styles.header__buttonsPopover}>
                        <ButtonWithPopover
                            title={"Вставка"}
                            buttons={buttonsInsert}
                            id={"insert"}
                            type={ButtonType.Text}
                        />
                    </div>
                    <div className={styles.header__buttonsPopover}>
                        <ButtonWithPopover
                            title={"Слайд"}
                            buttons={buttonsSlide}
                            id={"slide"}
                            type={ButtonType.Text}
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
                        type={ButtonType.Text}
                    />
                </div>
            </div>
            <div className={styles.header__toolbox}>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {
                            props.addSlideFunc();
                        }}
                        icon={<NewSlideIcon />}
                        id="newSlideButton"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<UndoIcon />}
                        id="UndoButton"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<RedoIcon />}
                        id="RedoButton"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateTextBoxIcon />}
                        id="CreateTextBoxButton"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateImageIcon />}
                        id="CreateImageButton"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateGeomFigureIcon />}
                        id="CreateGeomFigureButton"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateLineIcon />}
                        id="CreateLineButton"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        title="Фон"
                        id="BackgroundButton"
                        type={ButtonType.ToolBButton}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        title="Переход"
                        id="TrasitionButtton"
                        type={ButtonType.ToolBButton}
                    />
                </div>
            </div>
        </div>
    );
};

export { Header };
