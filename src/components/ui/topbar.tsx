import React from "react";

// MUI
import { Box, Typography } from "@mui/material";

// components
import DotIndicator from "./dot-indicator";

// props
import type { TopbarProps } from "../../interfaces/props";

const Topbar: React.FC<TopbarProps> = ({ positionalString }) => {
    return (
        <>
            <Box sx={{
                bgcolor: '#B7B7B7',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 50,
                p: 1,
                pr: 1.75,
                pl: 1.75,
                borderRadius: 3,
                position: 'fixed',
                top: 0,
                left: '50%',
                width: '74vw',
                transform: 'translateX(-50%)'
            }}>
                {/* name / logo */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <DotIndicator />

                    <Typography sx={{
                        fontFamily: 'GeistMono-Medium',
                        fontSize: 14,
                        textTransform: 'uppercase',
                        ml: .75
                    }}>liminality</Typography>
                </Box>

                <Box sx={{
                    width: '1px',
                    height: '40%',
                    background: '#7F7F7F',
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    left: '27%'
                }}></Box>

                <Box sx={{
                    width: '1px',
                    height: '40%',
                    background: '#7F7F7F',
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    right: '27%'
                }}></Box>

                {/* scroll position */}
                <Typography sx={{
                    fontFamily: 'GeistMono-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase'
                }}>[ {positionalString} ]</Typography>

                {/* menu trigger */}
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 1.5
                    }}>
                        <DotIndicator />

                        <Typography sx={{
                            fontFamily: 'GeistMono-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                            ml: .75
                        }}>discover</Typography>
                    </Box>

                    <button style={{
                        background: 'black',
                        borderRadius: '8px',
                        width: 45,
                        height: 45,
                        outline: 'none',
                        border: 'none',
                        boxShadow: 'none',
                    }}>
                        <img style={{ width: '70%' }} src="/icons/menu-icon.svg" alt="" />
                    </button>
                </Box>
            </Box>
        </>
    )
}

export default Topbar