import React, { useEffect, useState } from "react";

// MUI
import { Box, Typography } from "@mui/material";

// utils
import { textList } from "../../utils/text-list";

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
    const [xCoords, setXCords] = useState<number>(0);
    const [yCoords, setYCords] = useState<number>(0);

    useEffect(() => {
        const getCoords = (e: any) => {
            console.log(e.clientX)
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

                {/* markers */}
                <Box sx={{
                    width: 55,
                    aspectRatio: 1,
                    // p: .25,
                    bgcolor: '#B7B7B7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    right: -80,
                    top: '18%',
                    // transform: 'translateX(-50%)',
                }}>
                    <Typography sx={{
                        fontSize: 9,
                        fontFamily: 'Geist-Medium'
                    }}>[ + {xCoords} ]</Typography>
                </Box>

                {/* markers */}
                <Box sx={{
                    width: 55,
                    aspectRatio: 1,
                    // p: .25,
                    bgcolor: '#B7B7B7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: -80,
                    bottom: '18%'
                }}>
                    <Typography sx={{
                        fontSize: 9,
                        fontFamily: 'Geist-Medium'
                    }}>[ + {yCoords} ]</Typography>
                </Box>

                {/* ver/hor lines */}
                {/* <Box sx={{
                    position: 'fixed',
                    width: '1px',
                    height: '100%',
                    bgcolor: '#B3B3B3',
                    opacity: .2,
                    top: 0,
                    left: '10%',
                }}></Box>

                <Box sx={{
                    position: 'fixed',
                    width: '1px',
                    height: '100%',
                    bgcolor: '#B3B3B3',
                    opacity: .2,
                    top: 0,
                    right: '10%',
                }}></Box> */}
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 5
            }}>
                {textList.map((item, index) => (
                    <Box key={index}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: getTextPlacement(index)
                        }}>
                            <Box sx={{
                                textTransform: 'uppercase',
                                backgroundColor: '#B7B7B7',
                                width: 'fit-content',
                                p: .45,
                                pr: .85,
                                pl: .85,
                            }}>
                                <Typography sx={{
                                    color: 'black',
                                    fontSize: 10.55,
                                    fontFamily: 'Geist-SemiBold',
                                }}>{item.title}</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{
                            color: '#B7B7B7',
                            fontFamily: 'Geist-Medium',
                            textTransform: 'uppercase',
                            fontSize: 10.55,
                            mt: 1
                        }}>{item.content}</Typography>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Welcome