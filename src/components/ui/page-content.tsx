import React from "react";

// MUI
import { Box, Typography } from "@mui/material";

// component
import DotIndicator from "./dot-indicator";
import Paragraph from "./paragraph";

// props
import type { PageContentProps } from "../../interfaces/props";

const PageContent: React.FC<PageContentProps> = ({ heading, content }) => {
    return (
        <>
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

                <Box sx={{
                    display: 'flex'
                }}>
                    <Typography sx={{
                        color: '#B3B3B3',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Medium',
                        lineHeight: 1.65,
                        letterSpacing: 1.45
                    }}>uppercase</Typography>

                    <Typography sx={{
                        color: '#B3B3B3',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Medium',
                        lineHeight: 1.65,
                        ml: 1,
                        mr: 1
                    }}> | </Typography>

                    <Typography sx={{
                        color: '#B3B3B3',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Medium',
                        lineHeight: 1.65,
                        letterSpacing: 1.45,
                        opacity: .55
                    }}>lowercase</Typography>
                </Box>
            </Box>

            <Box sx={{
                width: '100%',
                height: '1px',
                bgcolor: '#B3B3B3',
                opacity: .25,
                mt: 1
            }}></Box>

            <Box sx={{ mt: 2.55 }}>
                <Paragraph content={content} />
            </Box>
        </>
    )
}

export default PageContent