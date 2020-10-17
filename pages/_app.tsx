import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { analytics, AnalyticsContext } from "../src/scripts/analytics";
import "../src/css/tailwind.css";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <AnalyticsContext.Provider value={analytics}>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>{process.env.SITE_NAME}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </AnalyticsContext.Provider>
    );
}