import React from "react";
import styles from "./ListSlide.module.css";
import { SlideProps, SlideView } from "../../components/slide/Slide";

type MinSlidesProps = {
    slides: Array<SlideProps>;
};

const ListOfSLide = (props: MinSlidesProps) => {
    const { slides } = props;

    const widthSlide = slides[0].width * document.documentElement.clientWidth;

    const scale: number = 300 / widthSlide;

    const viewsMinSlides = slides.map((slide: SlideProps) => {
        return (
            <div
                className={styles.slide}
                key={slide.id}
                style={{
                    scale: `${scale}`,
                    width:
                        slide.width *
                        document.documentElement.clientWidth *
                        scale,
                    height:
                        slide.height *
                        document.documentElement.clientHeight *
                        scale,
                }}
            >
                <SlideView {...slide} key={slide.id} />
            </div>
        );
    });

    return <div className={styles.listOfSlide}>{viewsMinSlides}</div>;
};

export { ListOfSLide };
