import React from "react";

// MUI
import { Box } from "@mui/material"

// components
import Topbar from "../components/ui/topbar"
import SectionBreaker from "../components/ui/section-breaker"
import Welcome from "../components/home/welcome/welcome"
import Journey from "../components/home/journey/journey"
import FloorPlan from "../components/home/floor-plan/floor-plan"
import ScrollTrigger from "../components/ui/scroll-trigger";

// utils
import { parentWrapperStyles } from "../utils/wrapper-styles";

const Home: React.FC = () => {
    localStorage.setItem('isTransitionOverlayOpened', "false");

    return (
        <>
            <Topbar positionalString="welcome" />

            <Box sx={parentWrapperStyles}>
                <Welcome />

                <SectionBreaker heading="journey" number="002" />

                <Journey />

                <SectionBreaker heading="site plan" number="003" />

                <FloorPlan />
            </Box>

            <ScrollTrigger targetScreen="screenFour" />
        </>
    )
}

export default Home;