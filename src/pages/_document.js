import React from 'react'
import Analytics from 'components/Analytics'

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Analytics />

                </body>
            </html>
        );
    }
}