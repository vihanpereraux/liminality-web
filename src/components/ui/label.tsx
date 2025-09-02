import React from "react";

// MUI
import { Box, Typography } from "@mui/material";

// props
import type { LabelProps } from "../../interfaces/props";

const Lable: React.FC<LabelProps> = ({ text }) => {
    return (
        <>
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
                    fontSize: 10,
                    fontFamily: 'GeistMono-Medium',
                }}>{text}</Typography>
            </Box>
        </>
    )
}

export default Lable