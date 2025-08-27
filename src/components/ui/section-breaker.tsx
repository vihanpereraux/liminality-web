import React from "react";

// MUI
import { Box, Typography } from "@mui/material";

// props
import type { SectionBreakerProps } from "../../interfaces/props";

const SectionBreaker: React.FC<SectionBreakerProps> = ({ heading, number }) => {
    return (
        <>
            <Box sx={{
                mt: 10,
                mb: 10
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        color: '#ACACAC',
                        fontSize: 10,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Light',
                        lineHeight: 1.65,
                        letterSpacing: 1.45
                    }}>[ {heading} ]</Typography>

                    <Typography sx={{
                        color: '#ACACAC',
                        fontSize: 10,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Light',
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