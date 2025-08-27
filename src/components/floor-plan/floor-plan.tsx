import React from "react";

// MUI 
import { Box, Typography } from "@mui/material";

// utils
import { textList } from "../../utils/text-list";

const FloorPlan: React.FC = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                aspectRatio: 16 / 9,
                backgroundColor: 'rgb(10, 10, 10)',
                position: 'relative'
            }}>
                {/* three canvas */}
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2,
                mb: 5
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
                                fontSize: 10,
                                fontFamily: 'GeistMono-Light',
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