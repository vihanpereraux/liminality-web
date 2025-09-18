import { useEffect, useState } from "react";

export const useViewportWidth = () => {
    const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const getScreenChange = () => {
            setViewportWidth(window.innerWidth);
        }
        window.addEventListener('resize', getScreenChange);

        return () => {
            window.removeEventListener('resize', getScreenChange);
        }
    }, [location]);

    return viewportWidth
}