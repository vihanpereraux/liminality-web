import React from "react";

// MUI 
import { Box, Typography } from "@mui/material";

// components
import Scene from "./scene";
import Details from "./details";

// utils
import { textList } from "../../../utils/text-list";

const FloorPlan: React.FC = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                aspectRatio: 16 / 9,
                backgroundColor: 'rgb(10, 10, 10)',
                position: 'relative',
            }}>
                {/* three canvas */}
                <Box sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    background: 'rgba(0, 0, 0, .1)',
                    pointerEvents: 'none',
                    backdropFilter: 'blur(1.5px)'
                }}></Box>
                <Scene />

                {/* chamber details */}
                <Details />
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2,
                mb: 2
            }}>
                {textList.map((item, index) => (
                    <Box key={index}>
                        <Box sx={{
                            textTransform: 'uppercase',
                            backgroundColor: 'none',
                            width: 'fit-content',
                        }}>
                            <Typography sx={{
                                color: '#B7B7B7',
                                fontSize: 10,
                                fontFamily: 'GeistMono-Medium',
                                textAlign: 'center'
                            }}>{item.title}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default FloorPlan;