
import '../css/main.css';

import { pageview } from "../lib/ga";


export default function MyApp({ Component, pageProps }) {

    return <Component {...pageProps} />;

}
