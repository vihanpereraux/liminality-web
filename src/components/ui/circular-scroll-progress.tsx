import React, { useEffect, useState } from "react";
import { Box, Fade, Typography } from "@mui/material";

// components
import DotIndicator from "./dot-indicator";

interface CircularScrollProgressProps {
    progress: number; // 0 to 100
    isVisible: boolean;
}

const CircularScrollProgress: React.FC<CircularScrollProgressProps> = ({ progress, isVisible }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    // Handle exit animation
    useEffect(() => {
        if (!isVisible && animatedProgress > 0) {
            setIsExiting(true);
            // Reset exit state after animation completes
            const timer = setTimeout(() => {
                setIsExiting(false);
            }, 800); // Match the exit animation duration

            return () => clearTimeout(timer);
        } else {
            setIsExiting(false);
        }
    }, [isVisible, animatedProgress]);

    // Smooth lerped progress animation with better responsiveness
    useEffect(() => {
        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        if (isVisible) {
            const interval = setInterval(() => {
                setAnimatedProgress(prev => {
                    // Use different lerp factors based on direction and proximity to target
                    const isIncreasing = progress > prev;
                    const isNearZero = progress <= 5;

                    let lerpFactor = 0.85; // Default

                    if (isNearZero) {
                        lerpFactor = 0.02; // Very fast when approaching zero
                    } else if (isIncreasing) {
                        lerpFactor = 0.05; // Slightly faster when increasing
                    } else {
                        lerpFactor = 0.05; // Faster when decreasing
                    }

                    const newProgress = lerp(prev, progress, lerpFactor);

                    // More precise threshold for stopping animation
                    return Math.abs(newProgress - progress) < 0.3 ? progress : newProgress;
                });
            }, 16); // 60fps

            return () => clearInterval(interval);
        } else if (isExiting) {
            // When exiting, smoothly animate progress to 0
            const interval = setInterval(() => {
                setAnimatedProgress(prev => {
                    if (prev <= 0.5) {
                        return 0;
                    }
                    return prev * 0.85; // Smooth fade out
                });
            }, 16);

            return () => clearInterval(interval);
        } else {
            // When not visible and not exiting, immediately reset to 0
            setAnimatedProgress(0);
        }
    }, [progress, isVisible, isExiting]);

    const radius = 42; // Larger for more presence
    const strokeWidth = 1;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

    if (!isVisible && !isExiting) return null;

    const isTransitionOverlayOpened = JSON.parse(localStorage.getItem('isTransitionOverlayOpened') || "false");

    return (
        <>
            {!isTransitionOverlayOpened && (
                <Fade in={isVisible}
                    timeout={800}>
                    <Box sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: `blur(${progress * .02}px)`,
                        width: '100%',
                        height: '100vh',
                        // conditional stylings
                        opacity: isVisible ? 1 : 0,
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: isVisible
                            ? 'cinematicEntrance 0.8s ease-out'
                            : isExiting
                                ? 'cinematicExit 0.8s ease-in'
                                : 'none',
                        '@keyframes cinematicEntrance': {
                            '0%': {
                                opacity: 0,
                                transform: 'translate(-50%, -50%) scale(0.3)',
                                // filter: 'blur(10px)',
                            },
                            '60%': {
                                opacity: 0.8,
                                transform: 'translate(-50%, -50%) scale(1.1)',
                                // filter: 'blur(2px)',
                            },
                            '100%': {
                                opacity: 1,
                                transform: 'translate(-50%, -50%) scale(1)',
                                // filter: 'blur(0px)',
                            },
                        },
                        '@keyframes cinematicExit': {
                            '0%': {
                                opacity: 1,
                                transform: 'translate(-50%, -50%) scale(1)',
                                // filter: 'blur(0px)',
                            },
                            '40%': {
                                opacity: 0.8,
                                transform: 'translate(-50%, -50%) scale(1.1)',
                                // filter: 'blur(2px)',
                            },
                            '100%': {
                                opacity: 0,
                                transform: 'translate(-50%, -50%) scale(0.3)',
                                // filter: 'blur(10px)',
                            },
                        },
                    }}>
                        <Box sx={{ position: 'relative' }}>
                            <Box sx={{
                                width: 'fit-content',
                                height: 'fit-content',
                                position: 'absolute',
                                transform: 'translate(-50%, -50%)',
                                left: '50%',
                                top: '50%'
                            }}>
                                <DotIndicator bgColor="#B7B7B7" />
                            </Box>
                            <svg
                                height={radius * 2}
                                width={radius * 2}
                                style={{
                                    transform: 'rotate(-90deg)', // Start from top
                                    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
                                }}
                            >
                                {/* Background circle */}
                                <circle
                                    stroke="rgba(255, 255, 255, 0.05)"
                                    fill="transparent"
                                    strokeWidth={strokeWidth}
                                    r={normalizedRadius}
                                    cx={radius}
                                    cy={radius}
                                />

                                {/* Progress circle */}
                                <circle
                                    stroke="white"
                                    fill="transparent"
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={strokeDasharray}
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="round"
                                    r={normalizedRadius}
                                    cx={radius}
                                    cy={radius}
                                    style={{
                                        transition: 'stroke-dashoffset 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Faster, more responsive
                                        filter: `drop-shadow(0 0 ${12 + animatedProgress * 0.2}px rgba(255, 255, 255, ${0.5 + animatedProgress * 0.005}))`,
                                    }}
                                />
                            </svg>
                        </Box>

                        <Typography sx={{
                            color: '#B7B7B7',
                            fontFamily: 'GeistMono-Medium',
                            textTransform: 'uppercase',
                            fontSize: 14,
                            mt: 2.5,
                            textAlign: 'center',
                        }}>scroll further to
                            <br />continue the journey</Typography>
                    </Box>
                </Fade>
            )}
        </>
    );
};

export default CircularScrollProgress;
