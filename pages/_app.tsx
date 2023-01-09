import 'colors';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

console.log('App is running and ready...'.green);

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
