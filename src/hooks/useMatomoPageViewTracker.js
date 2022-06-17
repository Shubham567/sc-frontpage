import { useMatomo } from "@datapunt/matomo-tracker-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function useMatomoPageViewTracker() {
    const { trackPageView } = useMatomo();
    const router = useRouter();
    useEffect(() => {
        trackPageView();
    }, [router.pathname, trackPageView]);
}

export default useMatomoPageViewTracker;
