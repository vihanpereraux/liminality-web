import React from "react";

// MUI
import { Box, Typography } from "@mui/material";

// components
import DotIndicator from "./dot-indicator";

// props
import type { ChamberSectionBreakerProps } from "../../interfaces/props";

const ChamberSectionBreaker: React.FC<ChamberSectionBreakerProps> = ({ headingLeft, headingRight }) => {
    return (
        <>
            <Box sx={{ mt: 10, mb: 2.55 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {[headingLeft, headingRight].map((_, index) => (
                        <Box key={index}
                            sx={{
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
                            }}>[ {index == 0 ? headingLeft : headingRight} ]</Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{
                    width: '100%',
                    height: '1px',
                    bgcolor: '#B3B3B3',
                    opacity: .25,
                    mt: 1
                }}></Box>
            </Box>
        </>
    )
}

export default ChamberSectionBreaker