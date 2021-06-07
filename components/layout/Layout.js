import React from "react";
import Head from "next/head";
import Header from "../Header/Header";

const Layout = ({ children }) => {
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
		window.scrollTo(0,0);
	};

	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
				<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/manifest.json"/>
				<meta name="msapplication-TileColor" content="#ffffff"/>
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
				<meta name="theme-color" content="#ffffff"/>
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
		</>
	);
};

export default Layout;
