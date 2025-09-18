import React, { useEffect, useState } from "react";

// MUI
import { Box, Typography } from "@mui/material";

// components
import Scene from "./scene";
import Label from "../../ui/label";

// utils
import { textList } from "../../../utils/text-list";

// hooks
import { useViewportWidth } from "../../../hooks/useViewportWidth";

const getTextPlacement = (index: number) => {
    let justifyContent: string = "";
    switch (index) {
        case 0:
            justifyContent = "left"
            break;
        case 1:
            justifyContent = "center"
            break;

        case 2:
            justifyContent = "right"
            break;

        default:
            break;
    }

    if (justifyContent.length > 0) {
        return justifyContent
    }
}

const Welcome: React.FC = () => {
    const viewportWidth = useViewportWidth();

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
            <Box sx={{
                width: '100%',
                aspectRatio: 16 / 9,
                backgroundColor: 'rgb(10, 10, 10)',
                position: 'relative'
            }}>
                {/* three canvas */}
                <Scene />

                {/* markers */}
                {viewportWidth > 1024 && (<>
                    <Box sx={{
                        width: 55,
                        aspectRatio: 1,
                        bgcolor: '#B7B7B7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        right: -80,
                        top: '18%',
                    }}>
                        <img style={{
                            position: 'absolute',
                            right: -.7,
                            top: 0,
                            width: '20%',
                        }} src="/icons/corner-icon.svg" alt="" />

                        <Typography sx={{
                            fontSize: 8,
                            fontFamily: 'GeistMono-Medium',
                        }}>[+ {xCoords}]</Typography>

                        <img style={{
                            position: 'absolute',
                            left: -.7,
                            bottom: 0,
                            width: '20%',
                            transform: 'rotate(180deg)'
                        }} src="/icons/corner-icon.svg" alt="" />
                    </Box>

                    <Box sx={{
                        width: 55,
                        aspectRatio: 1,
                        bgcolor: '#B7B7B7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        left: -80,
                        bottom: '18%'
                    }}>
                        <img style={{
                            position: 'absolute',
                            left: -.7,
                            bottom: 0,
                            width: '20%',
                            transform: 'rotate(180deg)'
                        }} src="/icons/corner-icon.svg" alt="" />

                        <Typography sx={{
                            fontSize: 8,
                            fontFamily: 'GeistMono-Medium',
                        }}>[+ {yCoords}]</Typography>

                        <img style={{
                            position: 'absolute',
                            right: -.7,
                            top: 0,
                            width: '20%',
                        }} src="/icons/corner-icon.svg" alt="" />
                    </Box>
                </>)}
            </Box>

            <Box sx={{
                // display: 'flex',
                justifyContent: 'space-between',
                mt: 5
            }}>
                {textList.map((item, index) => (
                    <Box key={index}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: getTextPlacement(index)
                        }}>
                            <Label text={item.title} />
                        </Box>
                        <Typography sx={{
                            color: '#B7B7B7',
                            fontFamily: 'GeistMono-Medium',
                            textTransform: 'uppercase',
                            fontSize: 10,
                            mt: 1
                        }}>{item.content}</Typography>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Welcome