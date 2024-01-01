import React, { useEffect, useState } from "react";
import { SlideProps, SlideView } from "../../components/slide/Slide";
import styles from "./WorkField.module.css";

type WorkFieldProps = {
    slides: Array<SlideProps>;
    id: string;
};

export const WorkField = (props: WorkFieldProps) => {
    const { slides, id } = props;

    const slideUndefined = slides.find((el) => {
        if (el.id == id) {
            return el;
        }
    });

    const slide = slideUndefined ? slideUndefined : slides[0];

    return (
        <div className={styles.workField}>
            <SlideView {...slide} />
        </div>
    );
};
