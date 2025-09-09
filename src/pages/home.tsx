import React from "react";

// MUI
import { Box } from "@mui/material"

// components
import TopbarShader from "../components/ui/topbar-shader";
import Topbar from "../components/ui/topbar"
import SectionBreaker from "../components/ui/section-breaker"
import Welcome from "../components/home/welcome/welcome"
import Journey from "../components/home/journey/journey"
import FloorPlan from "../components/home/floor-plan/floor-plan"
import ScrollTrigger from "../components/ui/scroll-trigger";
import FadeOutTransition from "../components/ui/fade-out-transition";

// utils
import { parentWrapperStyles } from "../utils/wrapper-styles";

const Home: React.FC = () => {
    localStorage.setItem('isTransitionOverlayOpened', "false");

    return (
        <>
            <Topbar positionalString="welcome" />
            <TopbarShader />

            <FadeOutTransition duration={3000} delay={300}>
                <Box sx={parentWrapperStyles}>
                    <Welcome />

                    <Box sx={{ mt: 10 }}>
                        <SectionBreaker
                            heading="journey"
                            number="002"
                            textTransformSelection={false} />
                    </Box>

                    <Journey />

                    <Box sx={{ mt: 10 }}>
                        <SectionBreaker
                            heading="site plan"
                            number="003"
                            textTransformSelection={false} />
                    </Box>

                    <FloorPlan />
                </Box>

                <ScrollTrigger targetScreen="screenOne" />
            </FadeOutTransition>
        </>
    )
}

export default Home;