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
