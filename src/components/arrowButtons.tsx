import React from "react";

export const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
	return (
		<button
			onClick={onClick}
			className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10  bg-white bg-opacity-60 text-dark px-2 py-2 rounded-lg hover:bg-dark hover:text-primary"
			aria-label="Previous Slide"
		>
			&lt;
		</button>
	);
};

export const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
	return (
		<button
			onClick={onClick}
			className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10  bg-white bg-opacity-60 text-dark px-2 py-2 rounded-lg hover:bg-dark hover:text-primary"
			aria-label="Next Slide"
		>
			&gt;
		</button>
	);
};
