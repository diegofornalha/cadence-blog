
import '../css/main.css';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "../lib/ga";


export default function MyApp({ Component, pageProps }) {

    return <Component {...pageProps} />;

}
