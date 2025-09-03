import React, { useEffect, useState, useRef } from "react";

// components
import Transition from "../home/transition";
import CircularScrollProgress from "./circular-scroll-progress";

// utils
import { getTransitionScreenText } from "../../utils/transition-text";

// props
import type { ScrollTriggerProps } from "../../interfaces/props";

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({ targetScreen }) => {
    const hasLoggedBottom = useRef(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showCircularProgress, setShowCircularProgress] = useState(false);
    const [hasReachedBottom, setHasReachedBottom] = useState(false);
    const [entryAccepted, setEntryAccepted] = useState<boolean>(false);

    if (entryAccepted) {
        console.log("accessed !")
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        // Reset all scroll-related states when navigating to this page
        setShowCircularProgress(false);
        setScrollProgress(0);
        setHasReachedBottom(false);
        setShowOverlay(false);
        hasLoggedBottom.current = false;
    }, [location]);

    useEffect(() => {
        let accumulatedScroll = 0;
        let isProgressActive = false; // Track if progress mode is active
        let preActivationScroll = 0; // Track scroll before showing progress

        const handleWheel = (e: WheelEvent) => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.body.offsetHeight;
            const isAtBottom = scrollPosition >= documentHeight - 10;

            if (isAtBottom) {
                // First, accumulate scroll before showing progress
                if (e.deltaY > 0 && !isProgressActive) {
                    preActivationScroll += e.deltaY;

                    // Only activate progress mode after user has scrolled enough (200px worth)
                    if (preActivationScroll >= 1000) {
                        // console.log("Activating progress mode - user scrolled enough at bottom!");
                        isProgressActive = true;
                        setShowCircularProgress(true);
                        setHasReachedBottom(true);
                        accumulatedScroll = 0;
                    } else {
                        // Prevent default scroll but don't show progress yet
                        e.preventDefault();
                    }
                }

                // If progress mode is active, handle all wheel events
                if (isProgressActive) {
                    e.preventDefault(); // Prevent default scrolling

                    // Handle both forward and backward scrolling
                    if (e.deltaY > 0) {
                        // Scrolling down (forward) - increase progress
                        accumulatedScroll += e.deltaY * 0.4;
                    } else {
                        // Scrolling up (backward) - decrease progress
                        accumulatedScroll += e.deltaY * 0.6; // More sensitive for backward
                    }

                    // Clamp accumulated scroll between 0 and max needed for 100%
                    accumulatedScroll = Math.max(0, Math.min(accumulatedScroll, 400));
                    const newProgress = (accumulatedScroll / 400) * 100;

                    setScrollProgress(newProgress);

                    // console.log('Over-scroll Progress:', {
                    //     deltaY: e.deltaY,
                    //     accumulatedScroll,
                    //     newProgress,
                    //     isProgressActive
                    // });

                    // When progress reaches 100%, show transition
                    if (newProgress >= 100 && !hasLoggedBottom.current) {
                        // console.log("Over-scroll complete - showing transition!");
                        hasLoggedBottom.current = true;
                        setTimeout(() => {
                            setShowCircularProgress(false);
                            setShowOverlay(true);
                        }, 500);
                    }

                    // If user backscrolls to 0, deactivate progress mode
                    if (newProgress <= 0) {
                        // console.log("User backscrolled to 0 - deactivating progress mode");
                        setShowCircularProgress(false);
                        setHasReachedBottom(false);
                        isProgressActive = false;
                        accumulatedScroll = 0;
                        preActivationScroll = 0; // Reset pre-activation scroll too
                        // Don't reset hasLoggedBottom here to allow free scrolling
                    }
                }
            } else {
                // Reset pre-activation scroll when not at bottom
                preActivationScroll = 0;
            }
        };

        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.body.offsetHeight;
            const isAtBottom = scrollPosition >= documentHeight - 10;

            // Only reset when user scrolls significantly away from bottom
            if (!isAtBottom && hasReachedBottom) {
                const scrollFromBottom = documentHeight - scrollPosition;

                // Only reset if user scrolled up more than 50px from bottom
                if (scrollFromBottom > 50) {
                    // console.log("User scrolled away from bottom - full reset");
                    setHasReachedBottom(false);
                    setScrollProgress(0);
                    setShowCircularProgress(false);
                    hasLoggedBottom.current = false;
                    isProgressActive = false;
                    accumulatedScroll = 0;
                    preActivationScroll = 0; // Reset pre-activation scroll too
                }
            }
        };

        // Add event listeners
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasReachedBottom, showCircularProgress, showOverlay]);


    return (
        <>
            {/* Circular Scroll Progress */}
            <CircularScrollProgress
                progress={scrollProgress}
                isVisible={showCircularProgress} />

            <Transition
                chamberSection={getTransitionScreenText(targetScreen).chamberSection}
                chamberTitle={getTransitionScreenText(targetScreen).chamberTitle}
                textLines={getTransitionScreenText(targetScreen).textLines}
                nextRoute={getTransitionScreenText(targetScreen).nextRoute}
                showOverlay={showOverlay}
                setEntryAccepted={setEntryAccepted} />
        </>
    )
}

export default ScrollTrigger