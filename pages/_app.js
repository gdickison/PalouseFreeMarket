import "../public/styles/global.css";
import Head from "next/head";
import { Fragment } from "react";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"/>
                <link href="/public/styles/global.css" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </Fragment>
    )
};
export default MyApp;