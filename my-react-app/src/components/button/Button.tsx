import styles from "./Button.module.css";

type ButtonProps = {
    onClick: () => void;
    title: string;
};

const Button = (props: ButtonProps) => {
    const { onClick, title } = props;

    return (
        <div className={styles.buttonWrapper}>
            <button onClick={onClick} className={styles.button}>
                {title}
            </button>
        </div>
    );
};

export { Button };
export type { ButtonProps };
