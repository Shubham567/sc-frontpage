import {useMatomo} from "@datapunt/matomo-tracker-react";
import {useEffect} from "react";
import {useRouter} from "next/router";

function useMatomoPageViewTracker() {
    const { trackPageView } = useMatomo();
    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeComplete", () =>
          trackPageView({documentTitle: window.title || "SC - not page title", href: router.pathname,}))
    }, []);
}

export default useMatomoPageViewTracker;
