import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// MUI
import { Box } from "@mui/material";

// components
import Topbar from "../components/ui/topbar";
import TopbarShader from "../components/ui/topbar-shader";
import ChamberSectionBreaker from "../components/ui/chamber-section-breaker";
import PageHeading from "../components/ui/page-heading";
import PageContent from "../components/ui/page-content";
import SnapGallery from "../components/ui/snap-gallery";
import FadeOutTransition from "../components/ui/fade-out-transition";
import ScrollTrigger from "../components/ui/scroll-trigger";

// utils
import { parentWrapperStyles } from "../utils/wrapper-styles";
import { chamberOneImageList } from "../utils/chamber-image-lists";

const ChamberFour: React.FC = () => {
    const location = useLocation();
    useEffect(() => { window.scrollTo(0, 0) }, [location]);

    return (
        <>
            <Topbar positionalString="chamber four" />
            <TopbarShader />

            <FadeOutTransition duration={3000} delay={300}>
                <Box sx={parentWrapperStyles}>
                    <ChamberSectionBreaker headingLeft="title" headingRight="tangible realities" />

                    {/* heading */}
                    <PageHeading type="multi" content={["THE", "ENTROPY", "CHAMBER"]} />

                    {/* video */}
                        <Box sx={{ mt: 2 }}>
                        <img style={{
                                width: '100%',
                                aspectRatio: 16 / 9,
                                objectFit: 'cover',
                                opacity: .8
                            }}
                            src="https://i.ibb.co/wrYTbhS7/liminality-video-placeholder.jpg" alt="" />
                    </Box>

                    {/* content block 01 */}
                    <Box sx={{ mt: 8.5 }}>
                        <PageContent
                            heading="concept"
                            content="
                        Step into the realm of the senses - where sight, sound, 
                        touch, and motion reveal the laws of the observable world. 
                        Here, physical forces like gravity, light, and topography 
                        shape the environment in ways we can see and feel. This is 
                        the world that our senses understand, the foundation of experience, 
                        and the starting point of knowledge. Step into the realm of the senses - 
                        where sight, sound, touch, and motion reveal the laws of the observable world. 
                        Here, physical forces like gravity, light, and topography shape the environment 
                        in ways we can see and feel. This is the world that our senses understand, 
                        the foundation of experience, and the starting point of knowledge.
                        "
                        />
                    </Box>

                    {/* content block 02 */}
                    <Box sx={{ mt: 8.5 }}>
                        <PageContent
                            heading="curation"
                            content="
                        Visitors can move their hands to interact with simulated matter on 
                        the giant screens. Visitors can move their hands to interact with 
                        simulated matter on the giant screens. Visitors can move their hands 
                        to interact with simulated matter on the giant screens. Visitors can 
                        move their hands to interact with simulated matter on the giant screens.
                        Visitors can move their hands to interact with simulated matter on the 
                        giant screens. Visitors can move their hands to interact with simulated 
                        matter on the giant screens. Visitors can move their hands to interact 
                        with simulated matter on the giant screens. Visitors can move their hands 
                        to interact with simulated matter on the giant screens. Visitors can move 
                        their hands to interact with simulated matter on the giant screens. Visitors 
                        can move their hands to interact with simulated matter on the giant screens. 
                        Visitors can move their hands to interact with simulated matter on the giant 
                        screens. Visitors can move their hands to interact with simulated matter
                        on the giant screens.
                        "
                        />
                    </Box>

                    {/* content block 02 */}
                    <Box sx={{ mt: 8.5 }}>
                        <PageContent
                            heading="curation"
                            content="
                        Visitors can Step into the world of matter, the building blocks of everything 
                        around us. In this room, explore the four fundamental states— solid, liquid, 
                        gas, and plasma. Through interactive installations, witness how matter behaves 
                        in their particular states, and see the forces that govern these changes. 
                        Touch, observe, and engage as the physical world reveals its hidden dynamics. 
                        From the rigidity of solids to the fluidity of liquids, the expansiveness of 
                        gases, and the brilliance of plasma, discover how matter shapes the observable 
                        universe. Visitors can Step into the world of matter, the building blocks of 
                        everything around us. In this room, explore the four fundamental states— solid, 
                        liquid, gas, and plasma. Through interactive installations, witness how matter 
                        behaves in their particular states, and see the forces that govern these changes. 
                        Touch, observe, and engage as the physical world reveals its hidden dynamics. 
                        From the rigidity of solids to the fluidity of liquids, the expansiveness of 
                        gases, and the brilliance of plasma, discover how matter shapes
                        the observable universe.
                        "
                        />
                    </Box>

                    <ChamberSectionBreaker headingLeft="snaps" headingRight="tangible realities" />

                    {/* gallery */}
                    <Box sx={{ mt: 8, mb: 1 }}>
                        <SnapGallery items={chamberOneImageList} />
                    </Box>
                </Box>

                <ScrollTrigger targetScreen="screenFour" />
            </FadeOutTransition>
        </>
    )
}

export default ChamberFour;