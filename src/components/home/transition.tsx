import React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Backdrop } from "@mui/material";
import { Fade } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

// props
import type { TransitionProps } from "../../interfaces/props";

const Transition: React.FC<TransitionProps> = ({ showOverlay, setEntryAccepted, nextRoute }) => {
    const navigate = useNavigate();

    const navigateToNextRoute = () => {
        setEntryAccepted(true)
        navigate(`${nextRoute}`);
    }

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
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: 'GeistMono-Light',
                                textTransform: 'uppercase',
                                fontSize: 25,
                                mb: 4,
                                letterSpacing: 1.25,
                                opacity: showOverlay ? 1 : 0,
                                transition: 'opacity 3s ease-in-out',
                                transitionDelay: '1s'
                            }}>
                            Tangible Realities
                        </Typography>

                        <Button
                            variant="outlined"
                            onClick={navigateToNextRoute}
                            sx={{
                                border: '1px solid white',
                                color: 'white',
                                px: 2,
                                py: 2,
                                fontFamily: 'GeistMono-Light',
                                letterSpacing: '0.05em',
                                opacity: showOverlay ? 1 : 0,
                                // transition: 'all 3s ease-in-out',
                                transitionDelay: '2s',
                                fontSize: 12,
                            }}>
                            Enter chamber one
                        </Button>
                    </Box>
                </Fade>
            </Backdrop>
        </>
    )
}

export default Transition