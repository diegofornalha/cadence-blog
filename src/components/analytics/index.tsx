import React from 'react'

const Analytics = () => (
            <>
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-QH6FTZ9VEL4`}

            />
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QH6FTZ9VEL', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
)