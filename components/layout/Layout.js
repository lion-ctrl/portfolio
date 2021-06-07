import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../Header/Header";

import BtnToTop from "../ui/BtnToTop";

const Layout = ({ children }) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = entry.target.getAttribute("id");
					const menuLink = document.querySelector(
						`.header__menu a[href="#${id}"]`
					);

					if (entry.isIntersecting) {
						document
							.querySelector(".header__menu a.selected")
							.classList.remove("selected");
						menuLink.classList.add("selected");
					}
				});
			},
			{ rootMargin: "-50% 0px -50% 0px" }
		);

		document.querySelectorAll('.header__menu a').forEach(menuLink => {
			const hash = menuLink.getAttribute('href').split('#')[1];
			const target = document.querySelector(`#${hash}`);
			target && observer.observe(target);
		})
	}, []);
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
				<title>Leonardo Socorro</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
					integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			{children}
			<BtnToTop />
		</>
	);
};

export default Layout;
