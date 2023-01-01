import * as React from 'react';
import Script from 'next/script';

const Analytics = () => (
    <>
        <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=GTM-KZWVV34`}

        />
        <Script
            dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'GTM-KZWVV34', {
                            page_path: window.location.pathname,
                        });
                    `,
            }}
        />
    </>
)
export default Analytics;