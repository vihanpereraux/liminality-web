import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Backdrop, Button } from "@mui/material";
import { Fade } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

// props
import type { TransitionProps } from "../../interfaces/props";
import type { SecondaryTextProps } from "../../interfaces/props";

const SecondaryText: React.FC<SecondaryTextProps> = ({ textLines, showOverlay }) => {
    return (
        <>
            {textLines.map((line, index) => (
                <Typography key={index}
                    sx={{
                        fontFamily: 'GeistMono-Medium',
                        textTransform: 'uppercase',
                        fontSize: 15,
                        letterSpacing: .85,
                        opacity: showOverlay ? 1 : 0,
                        transition: 'all 2.5s ease-in-out',
                        transitionDelay: '3s',
                        color: '#B7B7B7',
                        px: 2,
                        py: 1.85,
                        mt: -3
                    }}>{line}</Typography>
            ))}

        </>
    )
}

const Transition: React.FC<TransitionProps> = ({ chamberSection, chamberTitle, textLines, showOverlay, setEntryAccepted, nextRoute }) => {
    const navigate = useNavigate();

    const navigateToNextRoute = () => {
        setEntryAccepted(true);
        navigate(`${nextRoute}`);
        localStorage.setItem('isTransitionOverlayOpened', "false");
    }

    useEffect(() => {
        if (showOverlay) {
            localStorage.setItem('isTransitionOverlayOpened', "true");
        }
    }, [showOverlay])

    return (
        <>
            {/* Cinematic Overlay */}
            <Backdrop open={showOverlay}
                sx={{
                    zIndex: 3,
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                <Fade in={showOverlay} timeout={2000}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        textAlign: 'center',
                        color: 'white',
                    }}>
                        <Typography sx={{
                            fontFamily: 'GeistMono-Medium',
                            textTransform: 'uppercase',
                            fontSize: 14,
                            opacity: showOverlay ? 1 : 0,
                            transition: 'all 2.5s ease-in-out',
                            transitionDelay: '1s',
                            color: '#B7B7B7',
                            px: 1.25,
                            py: 1.25,
                            letterSpacing: 0.85,
                        }}>{chamberSection}</Typography>

                        <Typography sx={{
                            fontFamily: 'GeistMono-Medium',
                            textTransform: 'uppercase',
                            fontSize: 20,
                            letterSpacing: .85,
                            opacity: showOverlay ? 1 : 0,
                            transition: 'all 2.5s ease-in-out',
                            transitionDelay: '2s',
                            bgcolor: '#B7B7B7',
                            color: 'black',
                            px: 1.25,
                            py: 1.25,
                            mt: 1
                        }}>{chamberTitle}</Typography>

                        <Box sx={{ mt: 5.5 }}>
                            <SecondaryText textLines={textLines} showOverlay={showOverlay} />
                        </Box>

                        <Button onClick={navigateToNextRoute}
                            sx={{
                                border: '1px solid rgba(183, 183, 183, .55)',
                                color: '#B7B7B7',
                                px: 2.25,
                                py: 1.85,
                                fontFamily: 'GeistMono-Medium',
                                opacity: showOverlay ? 1 : 0,
                                transition: 'all 2.5s ease-in-out',
                                transitionDelay: '4s',
                                fontSize: 13,
                                borderRadius: 0,
                                mt: 3
                            }}>
                            Enter chamber one →
                        </Button>
                    </Box>
                </Fade>
            </Backdrop>
        </>
    )
}

export default Transition