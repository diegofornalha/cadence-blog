
import '../css/main.css';


export default function MyApp({ Component, pageProps }) {

    const router = useRouter();

    useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
    }, [router.events]);


    return <Component {...pageProps} />;

}
