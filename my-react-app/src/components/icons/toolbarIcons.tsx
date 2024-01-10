import React from "react";

const NewSlideIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
		>
			<line
				x1="6"
				y1="4.73542e-08"
				x2="6"
				y2="12"
				stroke="black"
				strokeWidth="2"
			/>
			<line y1="6" x2="12" y2="6" stroke="black" strokeWidth="2" />
		</svg>
	);
};

const UndoIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="14"
			viewBox="0 0 15 14"
			fill="none"
		>
			<path
				d="M3.83317 13H11.1659C13.3046 11.5 16.2988 7.8 11.1659 5H2M2 5L5.66635 1M2 5L5.20805 8.5"
				stroke="black"
				strokeWidth="2"
			/>
		</svg>
	);
};

const RedoIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="14"
			viewBox="0 0 15 14"
			fill="none"
		>
			<path
				d="M11.1668 13H3.83413C1.69543 11.5 -1.29875 7.8 3.83413 5H13M13 5L9.33365 1M13 5L9.79195 8.5"
				stroke="black"
				strokeWidth="2"
			/>
		</svg>
	);
};

const CreateTextBoxIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="20"
			viewBox="0 0 15 18"
			fill="none"
		>
			<path
				d="M1.5 5V1H7.5M7.5 1V17M7.5 1H14V5M7.5 17H4M7.5 17H11"
				stroke="black"
				strokeWidth="2"
			/>
		</svg>
	);
};

const CreateImageIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
		>
			<path
				d="M0.34082 15.7751L6.48035 11.0852L15.5191 21.6588"
				stroke="black"
			/>
			<rect x="0.5" y="0.5" width="21" height="21" stroke="black" />
			<circle cx="14.8369" cy="7.16283" r="3.75194" fill="black" />
		</svg>
	);
};

const CreateGeomFigureIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
		>
			<path
				d="M10.4554 5.47771C10.4554 8.22683 8.22682 10.4554 5.47771 10.4554C2.7286 10.4554 0.5 8.22683 0.5 5.47771C0.5 2.7286 2.7286 0.5 5.47771 0.5C8.22682 0.5 10.4554 2.7286 10.4554 5.47771Z"
				stroke="black"
			/>
			<path
				d="M12.9651 20.2479L11.1145 11.007L20.1928 13.5374L12.9651 20.2479Z"
				stroke="black"
			/>
			<path d="M10.5 4.5H16.5V12.5" stroke="black" />
			<path d="M4.5 10.5V16.5H12" stroke="black" />
		</svg>
	);
};

const CreateLineIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
		>
			<line y1="22" x2="22" y2="0" stroke="black" strokeWidth="2" />
		</svg>
	);
};

export {
	NewSlideIcon,
	UndoIcon,
	RedoIcon,
	CreateTextBoxIcon,
	CreateImageIcon,
	CreateGeomFigureIcon,
	CreateLineIcon,
};
