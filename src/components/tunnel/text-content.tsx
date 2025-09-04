import React, { useState, useEffect } from "react";

// MUI
import { Typography, Box } from "@mui/material";

// components
import DetailBox from "../home/floor-plan/detail-box";

const TextContent: React.FC = () => {
    const [xCoords, setXCords] = useState<number>(0);
    const [yCoords, setYCords] = useState<number>(0);

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
            <DetailBox data={{
                left: 30,
                top: 30,
                lableText: "+ [ Title ] ",
                value: "the liminal passage",
                isHovering: true,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                right: 30,
                top: 30,
                lableText: "+ [ Room Measurements ] ",
                value: "22 x 22",
                isHovering: true,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                bottom: 30,
                left: 30,
                lableText: "+ [ Curation ] ",
                value: "Step through the Threshold, a liminal space that marks the divide between the seen and the unseen, the tangible and the theoretical.",
                isHovering: true,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                bottom: 30,
                right: 30,
                lableText: "+ [ Chambers ] ",
                value: "Step through the Threshold, a liminal space that marks the divide between the seen and the unseen, the tangible and the theoretical.",
                isHovering: true,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            {true && (
                <>
                    <Box sx={{
                        position: 'absolute',
                        right: 30,
                        top: '35%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        right: 30,
                        top: '45%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        right: 30,
                        top: '55%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 30,
                        top: '35%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 30,
                        top: '45%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 30,
                        top: '55%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>
                </>
            )}

            <Typography sx={{
                fontFamily: 'GeistMono-Medium',
                fontSize: 10,
                color: '#B7B7B7',
                textTransform: 'uppercase',
                lineHeight: 1.65,
                letterSpacing: 1.45,
                position: 'absolute',
                top: 30,
                transform: 'translate(-50%, -50%)',
                left: '36%',
                zIndex: 1,
                background: "one"
            }}>	[{xCoords}]</Typography>

            <Typography sx={{
                fontFamily: 'GeistMono-Medium',
                fontSize: 10,
                color: '#B7B7B7',
                textTransform: 'uppercase',
                lineHeight: 1.65,
                letterSpacing: 1.45,
                position: 'absolute',
                top: 30,
                transform: 'translate(-50%, -50%)',
                left: '64%',
                zIndex: 1,
                background: "one"
            }}>	[{yCoords}]</Typography>

            <Typography sx={{
                fontFamily: 'GeistMono-Medium',
                fontSize: 10,
                color: '#B7B7B7',
                textTransform: 'uppercase',
                lineHeight: 1.65,
                letterSpacing: 1.45,
                position: 'absolute',
                bottom: 30,
                transform: 'translate(-50%, -50%)',
                left: '36%',
                zIndex: 1,
                background: "one"
            }}>	[23.5097]</Typography>

            <Typography sx={{
                fontFamily: 'GeistMono-Medium',
                fontSize: 10,
                color: '#B7B7B7',
                textTransform: 'uppercase',
                lineHeight: 1.65,
                letterSpacing: 1.45,
                position: 'absolute',
                bottom: 30,
                transform: 'translate(-50%, -50%)',
                left: '64%',
                zIndex: 1,
                background: "one"
            }}>	[58.5038]</Typography>
        </>
    )
}

export default TextContent