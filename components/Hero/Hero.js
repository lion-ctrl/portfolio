import React, { useEffect } from "react";
import { textArray } from "../../data/data";

const Hero = () => {
	useEffect(() => {
		const typingDelay = 200;
		const erasingDelay = 100;
		const newTextDelay = 2000;

		let textArrayIndex = 0;
		let chartIndex = 0;

		const typedTextSpan = document.querySelector(".typed-text");
		const cursorSpan = document.querySelector(".cursor");

		function typing() {
			if (chartIndex < textArray[textArrayIndex].length) {
				if (!cursorSpan.classList.contains("typing"))
					cursorSpan.classList.add("typing");
				typedTextSpan.textContent +=
					textArray[textArrayIndex].charAt(chartIndex);
				chartIndex++;
				setTimeout(typing, typingDelay);
			} else {
				// erase
				cursorSpan.classList.remove("typing");
				setTimeout(erase, newTextDelay);
			}
		}

		function erase() {
			if (chartIndex > 0) {
				if (!cursorSpan.classList.contains("typing"))
					cursorSpan.classList.add("typing");
				typedTextSpan.textContent = textArray[textArrayIndex].substring(
					0,
					chartIndex - 1
				);
				chartIndex--;
				setTimeout(erase, erasingDelay);
			} else {
				// typing
				cursorSpan.classList.remove("typing");
				textArrayIndex++;
				if (textArrayIndex >= textArray.length) textArrayIndex = 0;
				setTimeout(typing, typingDelay);
			}
		}

		textArray.length && setTimeout(typing, newTextDelay + 250);
	}, []);

	return (
		<section className="hero" id="home">
			<div className="container hero__name">
				<h1>
					Hello, I'm <span>Leonardo Socorro</span>
				</h1>
				<p className="typing-text">
					<span className="typed-text"></span>
					<span className="cursor">&nbsp;</span>
				</p>
			</div>
		</section>
	);
};

export default Hero;
