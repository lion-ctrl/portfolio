import React, { useState } from "react";

const Header = () => {
	const [showmenu, setShowMenu] = useState(false);

	typeof window !== "undefined" &&
		window.addEventListener("scroll", function () {
			document
				.querySelector("#header")
				.classList.toggle("active", window.scrollY > 0);
		});

	return (
		<header className="header" id="header">
			<a href="#" className="header__logo">
				Portfolio
			</a>
			<div
				className={showmenu ? "toggle-menu active" : "toggle-menu"}
				onClick={() => setShowMenu(!showmenu)}
			></div>
			<div
				className={showmenu ? "header__menu active" : "header__menu"}
				onClick={() => setShowMenu(!showmenu)}
			>
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
		</header>
	);
};
export default Header;
