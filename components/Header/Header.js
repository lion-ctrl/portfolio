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
			<a href="#home" className="header__logo">
				Portafolio
			</a>
			<div
				className={showmenu ? "toggle-menu active" : "toggle-menu"}
				onClick={() => setShowMenu(!showmenu)}
			></div>
			<div
				className={showmenu ? "header__menu active" : "header__menu"}
				onClick={() => setShowMenu(!showmenu)}
			>
				<a href="#home" className="selected">Home</a>
				<a href="#about">Sobre</a>
				<a href="#skills">Habilidades</a>
				<a href="#projects">Projectos</a>
				<a href="#contact">Contacto</a>
			</div>
		</header>
	);
};
export default Header;
