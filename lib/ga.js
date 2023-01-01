export const pageview = (url) => {
    if (window !== undefined) {
        window.gtag("config", "G-99JF8KBFVZ", {
            page_path: url,
        });
    }
};
