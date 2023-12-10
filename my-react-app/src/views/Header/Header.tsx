import { useState } from "react";
import styles from "./Header.module.css";
import { ButtonWithPopover } from "../../components/ButtonWithPopover/ButtonWithPopover";
import { RectangleView } from "../../components/Rectangle";
import { ButtonProps } from "../../components/button/Button";

type HeaderProps = {
    name: string;
    setName: (name: string) => void;
};

const Header = (props: HeaderProps) => {
    const { name, setName } = props;

    const button1: Array<ButtonProps> = [
        {
            onClick: () => console.log("ХЙЦНЯ"),
            title: "ХЙЦНЯ",
        },
        {
            onClick: () => console.log("SSSS"),
            title: "SSSS",
        },
        {
            onClick: () => console.log("SSQSS"),
            title: "SSQSS",
        },
    ];

    return (
        <div className={styles.header}>
            <input
                value={name}
                onChange={(change) => {
                    setName(change.target.value);
                    console.log(name);
                }}
                style={{
                    minWidth: "100px",
                    fontSize: "15px",
                    width: `${(name.length * 4, 3)}`,
                }}
            />
            <ButtonWithPopover title={"Кнопки"} buttons={button1} />
        </div>
    );
};

export { Header };
export type { HeaderProps };
