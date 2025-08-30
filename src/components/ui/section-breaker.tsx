import React from "react";

// MUI
import { Box, Typography } from "@mui/material";

// components
import DotIndicator from "./dot-indicator";

// props
import type { SectionBreakerProps } from "../../interfaces/props";

const SectionBreaker: React.FC<SectionBreakerProps> = ({ heading, number }) => {
    return (
        <>
            <Box sx={{
                mt: 10,
                mb: 5
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <DotIndicator bgColor="#B3B3B3" />
                        <Typography sx={{
                            ml: .85,
                            color: '#B3B3B3',
                            fontSize: 11,
                            textTransform: 'uppercase',
                            fontFamily: 'GeistMono-Medium',
                            lineHeight: 1.65,
                            letterSpacing: 1.45
                        }}>[ {heading} ]</Typography>
                    </Box>

                    <Typography sx={{
                        color: '#B3B3B3',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Medium',
                        lineHeight: 1.65,
                        letterSpacing: 1.45
                    }}>[ {number} ]</Typography>
                </Box>

                <Box sx={{
                    width: '100%',
                    height: '1px',
                    bgcolor: '#B3B3B3',
                    opacity: .3,
                    mt: 1
                }}></Box>
            </Box>
        </>
    )
}

export default SectionBreaker