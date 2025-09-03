import React, { useState, useEffect, useRef } from "react";

// MUI 
import { Box, Typography } from "@mui/material";

// components
import Scene from "./scene";
import Details from "./details";
import Pointer from "./pointer";

// utils
import { textList } from "../../../utils/text-list";

const FloorPlan: React.FC = () => {
    const sceneWrapper = useRef<HTMLDivElement>(null);
    const [xCoords, setXCords] = useState<number>(0);
    const [yCoords, setYCords] = useState<number>(0);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    useEffect(() => {
        const getCoords = (e: any) => {
            setXCords(e.clientX);
            setYCords(e.clientY);
        }
        if (sceneWrapper.current) {
            sceneWrapper.current.addEventListener('mousemove', getCoords);
        }

        return () => {
            if (sceneWrapper.current) {
                sceneWrapper.current.removeEventListener('mousemove', getCoords);
            }
        }
    }, [sceneWrapper]);

    useEffect(() => {
        if (sceneWrapper.current) {
            sceneWrapper.current.addEventListener('mouseenter', () => {
                setIsHovering(true);
            });

            sceneWrapper.current.addEventListener('mouseleave', () => {
                setIsHovering(false);
            });
        }
        return () => {
            if (sceneWrapper.current) {
                sceneWrapper.current.removeEventListener('mouseenter', () => {
                    setIsHovering(true);
                });

                sceneWrapper.current.removeEventListener('mouseleave', () => {
                    setIsHovering(false);
                });
            }
        }
    }, [sceneWrapper])

    return (
        <>
            <Box ref={sceneWrapper}
                sx={{
                    width: '100%',
                    aspectRatio: 16 / 9,
                    backgroundColor: 'rgb(10, 10, 10)',
                    position: 'relative',
                    cursor: isHovering ? 'none' : 'auto'
                }}>
                {/* three canvas */}
                <Pointer left={xCoords} top={yCoords} isHovering={isHovering} />

                <Box sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    background: 'rgba(0, 0, 0, .1)',
                    pointerEvents: 'none',
                    backdropFilter: 'blur(1.5px)',
                }}></Box>
                <Scene />
                {/* chamber details */}
                <Details />
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 4,
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
                                fontSize: 8,
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