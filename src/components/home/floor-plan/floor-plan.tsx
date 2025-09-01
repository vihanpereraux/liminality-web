import React, { useEffect, useState } from "react";

// MUI 
import { Box, Typography } from "@mui/material";

// components
import Scene from "./scene";

// utils
import { textList } from "../../../utils/text-list";

const getCaption = (value: string) => {
    let caption: string = "";
    switch (value) {
        case "Room-01":
            caption = "Step into the realm of the senses - where sight, sound, touch, and motion reveal the laws of the observable world."
            break;

        case "Tunnel":
            caption = "Step through the Threshold, a liminal space that marks the divide between the seen and the unseen, the tangible and the theoretical."
            break;

        case "Room-02":
            caption = "Welcome to the realm of the imaginary, where the senses alone cannot reveal the mysteries of the universe."
            break;

        default:
            break;
    }
    return caption;
}

const FloorPlan: React.FC = () => {
    // const [element, setElement] = useState<string>("")
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [displayText, setDisplayText] = useState<string | null>(null);

    // Floor plan hover event listener
    useEffect(() => {
        const handleFloorPlanHover = (event: CustomEvent) => {
            const { detail } = event;
            console.log('Floor Plan Hover Event:', detail);

            if (detail.type === 'enter') {
                setIsHovering(true);
                // setElement(detail.elementId);
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
                setDisplayText(null);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isHovering, hoverText]);

    return (
        <>
            <Box sx={{
                width: '100%',
                aspectRatio: 16 / 9,
                backgroundColor: 'rgb(10, 10, 10)',
                position: 'relative',
                // border: '1px solid red'
            }}>
                <Box sx={{ 
                    position: 'absolute',
                    left: 0, 
                    top: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    background: 'rgba(0, 0, 0, .1)',
                    pointerEvents: 'none',
                    backdropFilter: 'blur(2px)'
                 }}></Box>
                {/* three canvas */}
                <Scene />

                {/* chamber details */}
                <Box sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 1,
                    width: '20%',
                    opacity: isHovering && hoverText ? 1 : 0,
                    transform: isHovering && hoverText ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                    pointerEvents: 'none',
                    visibility: displayText ? 'visible' : 'hidden'
                }}>
                    <Typography sx={{
                        fontFamily: 'GeistMono-Medium',
                        fontSize: 11,
                        color: '#B7B7B7',
                        textTransform: 'uppercase',
                    }}>{displayText && getCaption(displayText)}</Typography>
                </Box>
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
                                fontSize: 11,
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