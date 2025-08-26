import React from "react";

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
    return (
        <>
            <Box sx={{
                width: '100%',
                aspectRatio: 16 / 9,
                backgroundColor: 'rgb(10, 10, 10)'
            }}>
                {/* three canvas */}
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2
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