import React from 'react';
import Head from "next/head";
import Header from "../Header/Header";

const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <title>Leonardo Socorro</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
            </Head>
            <Header/>
            {children}
        </>
    );
}

export default Layout;