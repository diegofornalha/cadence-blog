import '../css/main.css';
import Analytics from '../components/Analytics';

export default function MyApp({ Component, pageProps }) {
    return (
        <Analytics>
            <Component {...pageProps} />
        </Analytics>
    );
}

// Path: src\components\Analytics.js
import { useEffect } from 'react';

export default function Analytics() {
    useEffect(() => {
        // Inserir o código do Analytics aqui
    }, []);

    return null;
}

// Path: src\pages\_app.js
import '../css/main.css';
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
