import React, { useRef, useEffect, useState } from "react";

// MUI
import { Box, Typography } from "@mui/material";

// components
import DotIndicator from "./dot-indicator";

// props
import type { SectionBreakerProps } from "../../interfaces/props";

const SectionBreaker: React.FC<SectionBreakerProps> = ({ heading, number, textTransformSelection, setUppercase }) => {
    const [uppercaseSelected, setUppercaseSelected] = useState<boolean>(true);

    const path = useRef<SVGPathElement>(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId: any = null;

    useEffect(() => { setPath(progress); }, [])

    const setPath = (progress: any) => {
        const width = window.innerWidth * 0.76;
        if (path.current) {
            path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
        }
    }

    const lerp = (x: any, y: any, a: any) => x * (1 - a) + y * a

    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId)
            resetAnimation()
        }
    }

    const manageMouseMove = (e: any) => {
        const { movementY, clientX } = e;
        if (path.current) {
            const pathBound = path.current.getBoundingClientRect();
            x = (clientX - pathBound.left) / pathBound.width;
            progress += movementY
            setPath(progress);
        }
    }

    const manageMouseLeave = () => {
        animateOut();
    }

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.2;
        setPath(newProgress);
        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        }
        else {
            resetAnimation();
        }
    }

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    }

    return (
        <>
            <Box sx={{ mt: 0, mb: 3 }}>
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

                    {!textTransformSelection ? (
                        <Typography sx={{
                            color: '#B3B3B3',
                            fontSize: 11,
                            textTransform: 'uppercase',
                            fontFamily: 'GeistMono-Medium',
                            lineHeight: 1.65,
                            letterSpacing: 1.45
                        }}>[ {number} ]</Typography>
                    ) : (
                        <Box sx={{
                            display: 'flex',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <Typography onClick={() => { setUppercase?.(true); setUppercaseSelected(true) }}
                                sx={{
                                    color: '#B3B3B3',
                                    fontSize: 11,
                                    textTransform: 'uppercase',
                                    fontFamily: 'GeistMono-Medium',
                                    lineHeight: 1.65,
                                    letterSpacing: 1.45,
                                    cursor: 'pointer',
                                    opacity: uppercaseSelected ? 1 : .55
                                }}>uppercase</Typography>

                            <Typography sx={{
                                color: '#B3B3B3',
                                fontSize: 11,
                                textTransform: 'uppercase',
                                fontFamily: 'GeistMono-Medium',
                                lineHeight: 1.65,
                                ml: 1,
                                mr: 1,
                                cursor: 'pointer'
                            }}> | </Typography>

                            <Typography onClick={() => { setUppercase?.(false); setUppercaseSelected(false) }}
                                sx={{
                                    color: '#B3B3B3',
                                    fontSize: 11,
                                    textTransform: 'uppercase',
                                    fontFamily: 'GeistMono-Medium',
                                    lineHeight: 1.65,
                                    letterSpacing: 1.45,
                                    opacity: uppercaseSelected ? .55 : 1,
                                    cursor: 'pointer'
                                }}>lowercase</Typography>
                        </Box>
                    )}
                </Box>

                <Box sx={{
                    mt: 1.55,
                    height: '1px',
                    marginBottom: '20px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Box sx={{
                        height: 40,
                        width: '100%',
                        position: 'relative',
                        top: '-20px',
                        zIndex: 1,
                        '&:hover': {
                            height: '230px',
                            top: '-250px'
                        }
                    }}
                        onMouseEnter={() => { manageMouseEnter() }}
                        onMouseMove={(e) => { manageMouseMove(e) }}
                        onMouseLeave={() => { manageMouseLeave() }}>
                    </Box>
                    <svg style={{
                        width: '100%',
                        height: '500px',
                        position: 'absolute',
                        top: '-250px'
                    }}>
                        <path style={{
                            stroke: '#B3B3B3',
                            strokeWidth: '.4px',
                            fill: 'none'
                        }} ref={path}></path>
                    </svg>
                </Box>

                {/* <Box sx={{
                    width: '100%',
                    height: '1px',
                    bgcolor: '#B3B3B3',
                    opacity: .3,
                    mt: 1
                }}></Box> */}
            </Box>
        </>
    )
}

export default SectionBreaker