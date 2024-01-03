import { react } from "@babel/types";
import { all } from "q";

const NewSlideIcon = () => {
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <line x1="6" y1="4.37115e-08" x2="6" y2="13" stroke="black" stroke-width="2"/>
        <line y1="7" x2="12" y2="7" stroke="black" stroke-width="2"/>
        </svg>
    );
};

const UndoIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="15" viewBox="0 0 55 15" fill="none">
        <path d="M3.83317 13.5H11.1659C13.3046 12 16.2988 8.3 11.1659 5.5H2M2 5.5L5.66635 1.5M2 5.5L5.20805 9" stroke="black" stroke-width="2"/>
        </svg>
    );
};

const RedoIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="15" viewBox="0 0 55 15" fill="none">
        <path d="M51.6668 13H44.3341C42.1954 11.5 39.2012 7.8 44.3341 5H53.5M53.5 5L49.8337 1M53.5 5L50.2919 8.5" stroke="black" stroke-width="2"/>
        </svg>
    );
};

const CreateTextBoxIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
        <path d="M1.5 5V1H7.5M7.5 1V17M7.5 1H14V5M7.5 17H4M7.5 17H11" stroke="black" stroke-width="2"/>
        </svg>
    );

};

const CreateImageIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M0.34082 15.7751L6.48035 11.0852L15.5191 21.6588" stroke="black"/>
        <rect x="0.5" y="0.5" width="21" height="21" stroke="black"/>
        <circle cx="14.8369" cy="7.16283" r="3.75194" fill="black"/>
        </svg>
    );
};

const CreateGeomFigureIcon = () => {
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
    <rect x="7.89355" y="8.43396" width="17.4906" height="17.4906" stroke="black"/>
    <circle cx="9.24528" cy="9.24528" r="8.74528" fill="#FDFFFC" stroke="black"/>
    <path d="M21.6379 31.9455L18.4557 18.0233L32.1038 22.2286L21.6379 31.9455Z" fill="#FDFFFC" stroke="black"/>
    </svg>
};

// const CreateLineIcon = () => {

// };

export {NewSlideIcon}