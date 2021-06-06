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
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Skills</a>
				<a href="#">Works</a>
				<a href="#">Contact</a>
			</div>
		</header>
	);
};
export default Header;
