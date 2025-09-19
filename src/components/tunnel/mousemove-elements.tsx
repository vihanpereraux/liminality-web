import React, {
    useState,
    useEffect,
    useRef
} from "react";

// MUI
import { Box, Typography } from "@mui/material";

const MousemoveElements: React.FC = () => {
    const [lerpedX, setLerpedX] = useState<number>(0);
    const [lerpedY, setLerpedY] = useState<number>(0);
    const lerpFactor = 0.125;
    const rectWidth: number = 150;
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;

        const getCoords = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        }

        const animate = () => {
            currentX += (targetX - currentX) * lerpFactor;
            currentY += (targetY - currentY) * lerpFactor;

            setLerpedX(currentX);
            setLerpedY(currentY);

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', getCoords);
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', getCoords);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        }
    }, [])

    return (
        <>
            <Box sx={{
                position: 'fixed',
                width: rectWidth,
                height: rectWidth,
                border: '1px solid rgba(179, 179, 179, .5)',
                bgcolor: 'none',
                top: lerpedY,
                left: lerpedX,
                zIndex: 2,
                transform: 'translate(-50%, -50%)',
                pointerEvent: 'none'
            }}></Box>

            <Box sx={{
                position: 'fixed',
                width: `calc(${lerpedX}px - ${rectWidth / 2}px - 5px)`,
                height: '1px',
                bgcolor: 'rgba(179, 179, 179, .65)',
                top: lerpedY,
                left: 0,
                zIndex: 2,
                transform: 'translateY(-50%)',
            }}></Box>

            <Box sx={{
                position: 'fixed',
                width: `calc(100% - ${lerpedX}px - ${rectWidth / 2}px - 5px)`,
                height: '1px',
                bgcolor: 'rgba(179, 179, 179, .65)',
                top: lerpedY,
                right: 0,
                zIndex: 2,
                transform: 'translateY(-50%)',
            }}></Box>

            {/* <Box sx={{
                position: 'fixed',
                width: `1px`,
                height: `calc(100% - ${lerpedY}px - ${rectWidth / 2}px - 5px)`,
                bgcolor: 'rgba(179, 179, 179, .5)',
                left: lerpedX,
                bottom: 0,
                zIndex: 2,
                transform: 'translateX(-50%)',
            }}></Box>

            <Box sx={{
                position: 'fixed',
                width: `1px`,
                height: `calc(${lerpedY}px - ${rectWidth / 2}px - 5px)`,
                bgcolor: 'rgba(179, 179, 179, .5)',
                left: lerpedX,
                top: 0,
                zIndex: 2,
                transform: 'translateX(-50%)',
            }}></Box> */}

            <Typography sx={{
                position: 'fixed',
                top: lerpedY - 15,
                left: 10,
                zIndex: 2,
                transform: 'translateY(-50%)',
                fontSize: 13,
                color: '#B7B7B7',
                fontFamily: 'GeistMono-Regular',
            }}>{((lerpedX / (window.innerWidth / 2)) - 1) * 1000 > 0 ?
                Math.round(((lerpedX / (window.innerWidth / 2)) - 1) * 1 * 1000)
                :
                Math.round(((lerpedX / (window.innerWidth / 2)) - 1) * 1000)} %</Typography>

            <Typography sx={{
                position: 'fixed',
                top: lerpedY - 15,
                right: 10,
                zIndex: 2,
                transform: 'translateY(-50%)',
                fontSize: 13,
                color: '#B7B7B7',
                fontFamily: 'GeistMono-Regular',
            }}>{((lerpedX / (window.innerWidth / 2)) - 1) * 1000 < 0 ?
                Math.round(((lerpedX / (window.innerWidth / 2)) - 1) * 1 * 1000)
                :
                Math.round(((lerpedX / (window.innerWidth / 2)) - 1) * 1000)} %</Typography>
        </>
    )
}

export default MousemoveElements