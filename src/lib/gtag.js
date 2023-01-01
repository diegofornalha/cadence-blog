export const pageview = (url) => {
    if (window !== undefined) {
        window.gtag("config", "G-QH6FTZ9VEL", {
            page_path: url,
        });
    }
};
