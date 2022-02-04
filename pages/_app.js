import "../public/styles/global.css";
import Head from "next/head";
import { Fragment } from "react";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </Fragment>
    )
};
export default MyApp;