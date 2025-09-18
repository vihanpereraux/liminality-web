import React, { useRef } from "react";
import gsap from "gsap";

// MUI
import { Box } from "@mui/material";

// components
import Topbar from "../components/ui/topbar";
import ChamberSectionBreaker from "../components/ui/chamber-section-breaker";
import PageHeading from "../components/ui/page-heading";
import PageContent from "../components/ui/page-content";
import SnapReview from "../components/ui/snap-preview";

// utils
import { parentWrapperStyles } from "../utils/wrapper-styles";

const ChamberOne: React.FC = () => {
    const imageGalleryRef = useRef<HTMLDivElement>(null);
    const plane1 = useRef<HTMLDivElement>(null);
    const plane2 = useRef<HTMLDivElement>(null);

    let requestAnimationFrameId: any = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.004;

    const manageMouseMove = (e: any) => {
        const { movementX, movementY } = e
        xForce += movementX * speed;
        yForce += movementY * speed;

        if (requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    }

    const lerp = (start: any, target: any, amount: any) => start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, { x: `+=${xForce * 0.3}`, y: `+=${yForce * 0.08}` })
        gsap.set(plane2.current, { x: `+=${xForce * 0.08}`, y: `+=${yForce * 0.3}` })
        // gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce != 0 || yForce != 0) {
            requestAnimationFrame(animate);
        }
        else {
            cancelAnimationFrame(requestAnimationFrameId)
            requestAnimationFrameId = null;
        }
    }

    return (
        <>
            <Topbar positionalString="chamber one" />

            <Box sx={parentWrapperStyles}>
                <ChamberSectionBreaker headingLeft="title" headingRight="tangible realities" />

                {/* heading */}
                <PageHeading type="multi" content={["states", "of", "matter"]} />

                {/* video */}
                <Box sx={{ mt: 2 }}>
                    <img
                        style={{
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
                        content="Step into the realm of the senses - where sight, sound, touch, and motion reveal the laws of the observable world. Here, physical forces like gravity, light, and topography shape the environment in ways we can see and feel. This is the world that our senses understand, the foundation of experience, and the starting point of knowledge. Step into the realm of the senses - where sight, sound, touch, and motion reveal the laws of the observable world. Here, physical forces like gravity, light, and topography shape the environment in ways we can see and feel. This is the world that our senses understand, the foundation of experience, and the starting point of knowledge."
                    />
                </Box>

                {/* content block 02 */}
                <Box sx={{ mt: 8.5 }}>
                    <PageContent
                        heading="curation"
                        content="Visitors can move their hands to interact with simulated matter on the giant screens. Visitors can move their hands to interact with simulated matter on the giant screens. Visitors can move their hands to interact with simulated matter on the giant screens.Visitors can move their hands to interact with simulated matter on the giant screens.Visitors can move their hands to interact with simulated matter on the giant screens.Visitors can move their hands to interact with simulated matter on the giant screens. Visitors can move their hands to interact with simulated matter on the giant screens. Visitors can move their hands to interact with simulated matter on the giant screens. Visitors can move their hands to interact with simulated matter on the giant screens.Visitors can move their hands to interact with simulated matter on the giant screens.Visitors can move their hands to interact with simulated matter on the giant screens.Visitors can move their hands to interact with simulated matter on the giant screens."
                    />
                </Box>

                {/* content block 02 */}
                <Box sx={{ mt: 8.5 }}>
                    <PageContent
                        heading="curation"
                        content="Visitors can Step into the world of matter, the building blocks of everything around us. In this room, explore the four fundamental states— solid, liquid, gas, and plasma. Through interactive installations, witness how matter behaves in their particular states, and see the forces that govern these changes. Touch, observe, and engage as the physical world reveals its hidden dynamics. From the rigidity of solids to the fluidity of liquids, the expansiveness of gases, and the brilliance of plasma, discover how matter shapes the observable universe. Visitors can Step into the world of matter, the building blocks of everything around us. In this room, explore the four fundamental states— solid, liquid, gas, and plasma. Through interactive installations, witness how matter behaves in their particular states, and see the forces that govern these changes. Touch, observe, and engage as the physical world reveals its hidden dynamics. From the rigidity of solids to the fluidity of liquids, the expansiveness of gases, and the brilliance of plasma, discover how matter shapes the observable universe."
                    />
                </Box>

                <ChamberSectionBreaker headingLeft="title" headingRight="tangible realities" />
                {/* gallery */}
                <Box onMouseMove={(e) => { manageMouseMove(e) }}
                    ref={imageGalleryRef}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100vh',
                        overflow: 'clip',
                        mt: 10
                    }}>
                    <Box ref={plane1} sx={{
                        position: 'relative',
                        width: '100%',
                        height: 330,
                    }}>
                        <SnapReview image="image_0" left="1%" top="10%" />
                        <SnapReview image="image_1" left="25%" top="2%" />
                        <SnapReview image="image_2" left="60%" top="15%" />
                        <SnapReview image="image_3" right="1%" top="10%" />
                    </Box>

                    <Box ref={plane2} sx={{
                        position: 'absolute',
                        width: '100%',
                        height: 330,
                        mt: 20,
                    }}>
                        <SnapReview image="image_3" left="5%" top="20%" />
                        <SnapReview image="image_2" left="28%" top="40%" />
                        <SnapReview image="image_1" left="55%" top="20%" />
                        <SnapReview image="image_0" right="2%" top="15%" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ChamberOne;