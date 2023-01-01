import '../css/main.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import * as gtag from '../lib/gtag';

export default function MyApp({ Component, pageProps }) {

    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag('config', 'GTM-KZWVV34', {
                page_path: url,
            });
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events])
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-99JF8KBFVZ`}
                strategy="afterInteractive"
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-99JF8KBFVZ', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
