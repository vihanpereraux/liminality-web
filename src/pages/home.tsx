import React, { useEffect, useRef, useState } from "react";

// MUI
import { Box } from "@mui/material"

// components
import Topbar from "../components/ui/topbar"
import SectionBreaker from "../components/ui/section-breaker"
import Welcome from "../components/home/welcome/welcome"
import Journey from "../components/home/journey/journey"
import FloorPlan from "../components/home/floor-plan/floor-plan"
import Transition from "../components/home/transition";

const Home: React.FC = () => {
    // const navigate = useNavigate();
    const hasLoggedBottom = useRef(false);
    const [showOverlay, setShowOverlay] = useState(true);
    const [entryAccepted, setEntryAccepted] = useState<boolean>(false);

    if (entryAccepted) {
        // navigate('/chamber-one');
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                if (!hasLoggedBottom.current) {
                    console.log("User has reached the very bottom of the page!");
                    hasLoggedBottom.current = true;
                    setShowOverlay(true);
                }
            } else {
                hasLoggedBottom.current = false;
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Topbar positionalString="welcome" />

            <Box sx={{ pl: '12vw', pr: '12vw', mt: 15 }}>
                <Welcome />

                <SectionBreaker heading="journey" number="002" />

                <Journey />

                <SectionBreaker heading="site plan" number="003" />

                <FloorPlan />
            </Box>

            {/* transition */}
            <Transition
                nextRoute="/chamber-one"
                showOverlay={showOverlay}
                setEntryAccepted={setEntryAccepted} />
        </>
    )
}

export default Home;