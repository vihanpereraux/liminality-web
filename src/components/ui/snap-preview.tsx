import React, { useEffect, useState } from "react";

// MUI
import { Box, Typography } from "@mui/material";

// props
import type { SnapPreviewProps } from "../../interfaces/props";

const SnapReview: React.FC<SnapPreviewProps> = ({ image, left, right, top, caption, setCaptionText }) => {
    const [xCoords, setXCords] = useState<number>(0);
    const [yCoords, setYCords] = useState<number>(0);

    const handleCaptionDisplay = () => {
        if (setCaptionText) {
            if (caption) {
                setCaptionText(caption);   
            }
        }
    }

    useEffect(() => {
        const getCoords = (e: any) => {
            setXCords(e.clientX);
            setYCords(e.clientY);
        }
        window.addEventListener('mousemove', getCoords)

        return () => {
            window.removeEventListener('mousemove', getCoords)
        }
    }, [])

    return (
        <>
            <Box sx={{
                width: 'fit-content',
                position: 'absolute',
                left: left,
                right: right,
                top: top,
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        color: '#B3B3B3',
                        fontSize: 8,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Medium',
                        letterSpacing: 1,
                        mb: 1
                    }}>[ {xCoords} ]</Typography>

                    <Typography sx={{
                        color: '#B3B3B3',
                        fontSize: 8,
                        textTransform: 'uppercase',
                        fontFamily: 'GeistMono-Medium',
                        letterSpacing: 1,
                        mb: 1
                    }}>[ {yCoords} ]</Typography>
                </Box>

                <img
                    onMouseOver={handleCaptionDisplay}
                    style={{
                        width: '12vw',
                        border: '1px solid rgba(179, 179, 179, .15)',
                    }}
                    className="chamber-snap"
                    src={`/images/chamber-one/${image}.jpg`} alt="" />

                <Typography sx={{
                    color: '#B3B3B3',
                    fontSize: 8,
                    textTransform: 'uppercase',
                    fontFamily: 'GeistMono-Medium',
                    letterSpacing: 1,
                    mt: 1
                }}>[ tangible realities ]</Typography>
            </Box>
        </>
    )
}

export default SnapReview