import React from "react"

// MUI
import { Box } from "@mui/material"

// components
import Scene from "../components/tunnel/scene"
import MousemoveElements from "../components/tunnel/mousemove-elements"
import FadeOutTransition from "../components/ui/fade-out-transition"
import TextContent from "../components/tunnel/text-content"

const Tunnel: React.FC = () => {
    

    return (
        <FadeOutTransition duration={3000} delay={300}>
            <Box sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                filter: 'contrast(1.25)',
            }}>
                <Scene />

                <MousemoveElements />

                {/* content */}
                <TextContent />
            </Box>
        </FadeOutTransition>
    )
}

export default Tunnel