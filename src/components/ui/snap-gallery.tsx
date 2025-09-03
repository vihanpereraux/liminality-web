import React, { useRef, useState } from "react";
import gsap from "gsap";

// MUI
import { Box, Typography } from "@mui/material";

// components
import SnapReview from "./snap-preview";

// props
import type { SnapGalleryProps } from "../../interfaces/props";

const SnapGallery: React.FC<SnapGalleryProps> = ({ items }) => {
    const [captionText, setCaptoinText] = useState<string>("hover on images");

    const imageGalleryRef = useRef<HTMLDivElement>(null);
    const plane1 = useRef<HTMLDivElement>(null);
    const plane2 = useRef<HTMLDivElement>(null);
    const plane3 = useRef<HTMLDivElement>(null);

    let requestAnimationFrameId: any = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.004;

    const manageMouseMove = (e: any) => {
        const { movementX, movementY } = e
        xForce += movementX * speed;
        yForce += movementY * speed;

        if (requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    }

    const lerp = (start: any, target: any, amount: any) => start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, { x: `+=${xForce * 0.3}`, y: `+=${yForce * 0.08}` })
        gsap.set(plane2.current, { x: `+=${xForce * 0.08}`, y: `+=${yForce * 0.3}` })
        gsap.set(plane3.current, { x: `-=${xForce * 0.09}`, y: `-=${yForce * 0.09}` })

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce != 0 || yForce != 0) {
            requestAnimationFrame(animate);
        }
        else {
            cancelAnimationFrame(requestAnimationFrameId)
            requestAnimationFrameId = null;
        }
    }


    return (
        <>
            <Box onMouseMove={(e) => { manageMouseMove(e) }}
                ref={imageGalleryRef}
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '110vh',
                    overflow: 'clip',
                }}>
                <Box ref={plane1} sx={{
                    position: 'relative',
                    width: '100%',
                    height: 330,
                }}>
                    {items[0].firstRow.map((item, index) => (
                        <div key={index}>
                            <SnapReview
                                setCaptionText={setCaptoinText}
                                caption={item.caption}
                                image={item.image}
                                left={item.left}
                                top={item.top}
                                right={item.right} />
                        </div>
                    ))}
                </Box>

                <Box ref={plane2} sx={{
                    position: 'absolute',
                    width: '100%',
                    height: 330,
                    mt: 20,
                }}>
                    {items[0].secondRow.map((item, index) => (
                        <div key={index}>
                            <SnapReview
                                setCaptionText={setCaptoinText}
                                caption={item.caption}
                                image={item.image}
                                left={item.left}
                                top={item.top}
                                right={item.right} />
                        </div>
                    ))}
                </Box>

                {/* wording */}
                <Box ref={plane3} sx={{
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '45%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        color: 'black',
                        fontFamily: 'GeistMono-Medium',
                        textTransform: 'uppercase',
                        fontSize: 10,
                        backgroundColor: '#B7B7B7',
                        px: 1.25,
                        py: 1,
                        width: 'fit-content'
                    }}>States of matter</Typography>

                    <Typography sx={{
                        color: '#B7B7B7',
                        fontFamily: 'GeistMono-Medium',
                        textTransform: 'uppercase',
                        fontSize: 12,
                        mt: 2,
                    }}>{captionText}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default SnapGallery