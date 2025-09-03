import React, { useEffect } from "react";

// MUI
import { Box } from "@mui/material";

interface PointerProps {
    left: number,
    top: number,
    isHovering: boolean
}

const Pointer: React.FC<PointerProps> = ({ left, top, isHovering }) => {

    useEffect(() => {
        console.log(isHovering);
    }, [isHovering])

    return (
        <>
            {isHovering && (
                <Box sx={{
                    position: 'fixed',
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'none',
                    zIndex: 1000,
                    left: left - 15,
                    top: top - 15,
                    pointerEvents: 'none',
                    transition: 'all .15s'
                }}>
                    <Box sx={{
                        width: '1px',
                        height: '100%',
                        bgcolor: 'rgba(179, 179, 179, .75)',
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '50%'
                    }}></Box>

                    <Box sx={{
                        width: '100%',
                        height: '1px',
                        bgcolor: 'rgba(179, 179, 179, .75)',
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '50%'
                    }}></Box>

                    <Box sx={{
                        width: '5px',
                        height: '5px',
                        bgcolor: 'rgba(179, 179, 179, 1)',
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)',
                        left: '51%',
                        top: '51%',
                        borderRadius: '50%'
                    }}></Box>
                </Box>
            )}
        </>
    )
}

export default Pointer