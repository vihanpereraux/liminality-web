import React, { useState, useEffect } from "react";

// MUI
import { Box } from "@mui/material";

// props
import type { FadeOutTransitionProps } from "../../interfaces/props";

const FadeOutTransition: React.FC<FadeOutTransitionProps> = ({ children, duration = 2000, delay = 500 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Start the fade-in after the specified delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Black overlay that fades out */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    zIndex: 10,
                    opacity: isVisible ? 0 : 1,
                    transition: `opacity ${duration}ms ease-in-out`,
                    pointerEvents: isVisible ? 'none' : 'all',
                }}
            />

            {/* Content underneath */}
            <Box sx={{ width: '100%', height: '100%' }}>
                {children}
            </Box>
        </Box>
    );
};

export default FadeOutTransition;
