import '../css/main.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
    <>

        <Script src={'https://www.googletagmanager.com/gtag/js?id=G-99JF8KBFVZ'} strategy='afterInteractive' />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-99JF8KBFVZ');
        `}
        </Script>
    </>

    return <Component {...pageProps} />;
}
