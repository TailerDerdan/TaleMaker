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

type HeaderProps = {
    addSlideFunc: () => void;
    SaveFunc: () => void;
};

const Header = (props: HeaderProps) => {
    const [name, setName] = useState<string>("Презентация");

    const buttonsFile: Array<ButtonProps> = [
        {
            onClick: () => {
            },
            title: "Открыть",
            id: "OpenButton",
            type: ButtonType.Text,
        },
        {
            onClick: () => {props.SaveFunc()},
            title: "Сохранить",
            id: "SaveButton",
            type: ButtonType.Text,
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
                        id="newSlideIcon"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<UndoIcon />}
                        id="UndoIcon"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<RedoIcon />}
                        id="RedoIcon"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateTextBoxIcon />}
                        id="CreateTextBoxIcon"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateImageIcon />}
                        id="CreateImageIcon"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateGeomFigureIcon />}
                        id="CreateGeomFigureIcon"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        icon={<CreateLineIcon />}
                        id="CreateLineIcon"
                        type={ButtonType.Icon}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        title="Фон"
                        id="CreateLineIcon"
                        type={ButtonType.Text}
                    />
                </div>
                <div className={styles.header__toolboxSeparator} />
                <div className={styles.header__toolboxButton}>
                    <Button
                        onClick={() => {}}
                        title="Переход"
                        id="CreateLineIcon"
                        type={ButtonType.Text}
                    />
                </div>
            </div>
        </div>
    );
};

export { Header };
