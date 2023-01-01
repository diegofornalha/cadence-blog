
import '../css/main.css';
import { useEffect } from "react";
import { pageview } from "../lib/ga";


export default function MyApp({ Component, pageProps }) {

    return <Component {...pageProps} />;

}
