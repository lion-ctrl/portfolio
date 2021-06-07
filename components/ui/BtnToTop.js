import React from "react";

const BtnToTop = () => {
	typeof window !== "undefined" &&
		window.addEventListener("scroll", function () {
			const btnTop = document.querySelector("#btn-top");
			if (window.scrollY > 300) {
				btnTop.classList.add("active");
			} else {
				btnTop.classList.remove("active");
			}
		});

	const backTop = () => {
		window.scrollTo(0, 0);
	};
    
	return (
		<div className="btn-top" onClick={backTop} id="btn-top">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 11l7-7 7 7M5 19l7-7 7 7"
				/>
			</svg>
		</div>
	);
};

export default BtnToTop;
