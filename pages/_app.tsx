import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return <Comment {...pageProps} />;
}

export default MyApp;
