export const pageview = (url) => {
    if (window !== undefined) {
        window.gtag("config", "GTM-KZWVV34", {
            page_path: url,
        });
    }
};
