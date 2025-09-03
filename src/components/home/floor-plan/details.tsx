import React, { useEffect, useState } from "react";

// components
import DetailBox from "./detail-box";

// MUI
import { Box, Typography } from "@mui/material";

// utils
import { getDetails } from "../../../utils/floor-plan-details";

const Details: React.FC = () => {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [displayText, setDisplayText] = useState<string>("");
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

    // Floor plan hover event listener
    useEffect(() => {
        const handleFloorPlanHover = (event: CustomEvent) => {
            const { detail } = event;
            if (detail.type === 'enter') {
                setIsHovering(true);
                setHoverText(detail.text);
            } else if (detail.type === 'leave') {
                setIsHovering(false);
                setHoverText(null);
            }
        };
        window.addEventListener('floorPlanHover', handleFloorPlanHover as EventListener);
        return () => {
            window.removeEventListener('floorPlanHover', handleFloorPlanHover as EventListener);
        };
    }, []);

    useEffect(() => {
        if (isHovering && hoverText) {
            setDisplayText(hoverText);
        } else if (!isHovering) {
            const timer = setTimeout(() => {
                setDisplayText("");
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isHovering, hoverText]);

    return (
        <>
            <DetailBox data={{
                left: 10,
                top: 40,
                lableText: "+ [ Title ] ",
                value: displayText && getDetails(displayText)[0].title,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                right: 10,
                top: 40,
                lableText: "+ [ Room Measurements ] ",
                value: displayText && getDetails(displayText)[0].roomMeasurements,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                bottom: 50,
                left: 10,
                lableText: "+ [ Curation ] ",
                value: displayText && getDetails(displayText)[0].curation,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            <DetailBox data={{
                bottom: 50,
                right: 10,
                lableText: "+ [ Chambers ] ",
                value: displayText && getDetails(displayText)[0].chambers,
                isHovering: isHovering,
                hoverText: "hoverText as string",
                displayText: "displayText as string"
            }} />

            {true && (
                <>
                    <Box sx={{
                        position: 'absolute',
                        right: 10,
                        top: '35%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        right: 10,
                        top: '45%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        right: 10,
                        top: '55%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 10,
                        top: '35%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 10,
                        top: '45%',
                        width: '6px',
                        height: '1px',
                        bgcolor: '#B7B7B7',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 10,
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
                top: 40,
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
                top: 40,
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
                bottom: 40,
                transform: 'translate(-50%, -50%)',
                left: '36%',
                zIndex: 1,
                background: "one"
            }}>	[23.6297]</Typography>

            <Typography sx={{
                fontFamily: 'GeistMono-Medium',
                fontSize: 10,
                color: '#B7B7B7',
                textTransform: 'uppercase',
                lineHeight: 1.65,
                letterSpacing: 1.45,
                position: 'absolute',
                bottom: 40,
                transform: 'translate(-50%, -50%)',
                left: '64%',
                zIndex: 1,
                background: "one"
            }}>	[58.4944]</Typography>
        </>
    )
}

export default Details