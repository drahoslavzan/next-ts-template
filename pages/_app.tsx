import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { createGlobalStyle } from 'styled-components';
import { analytics, AnalyticsContext } from "../src/scripts/Analytics";
import { config } from "../src/config";
import "../src/css/tailwind.css";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <AnalyticsContext.Provider value={analytics}>
            <Head>
                <title>{config.app}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </AnalyticsContext.Provider>
    );
}

const GlobalStyle = createGlobalStyle`
	html {
		width: 100%;
		height: 100%;
	}

	body {
		box-sizing: border-box;
		display: block;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		min-width: 30rem;
		font-family: sans-serif;
		font-size: 15px;
		color: black;
	}
`;