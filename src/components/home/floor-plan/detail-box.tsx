import React from "react";

// MUI
import { Typography, Box } from "@mui/material";

// components
import Lable from "../../ui/label";

interface DetailBoxProps {
    data: {
        left?: number,
        top?: number,
        bottom?: number,
        right?: number,
        lableText: string,
        value: string,
        isHovering: boolean,
        hoverText: string,
        displayText: string
    }
}

const DetailBox: React.FC<DetailBoxProps> = ({ data }) => {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: data.top,
                left: data.left,
                right: data.right,
                bottom: data.bottom,
                zIndex: 1,
                width: '20%',
                opacity: data.isHovering && data.hoverText ? 1 : 0,
                transform: data.isHovering && data.hoverText ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                pointerEvents: 'none',
                visibility: data.displayText ? 'visible' : 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: data.right ? 'flex-end' : 'flex-start'
            }}>
                <Lable text={data.lableText} />

                <Typography sx={{
                    fontFamily: 'GeistMono-Medium',
                    fontSize: 11,
                    color: '#B7B7B7',
                    textTransform: 'uppercase',
                    mt: 1.45,
                    lineHeight: 1.65,
                    letterSpacing: 1.45,
                    textAlign: data.right ? "right" : "left"
                }}>{data.displayText && data.value}</Typography>
            </Box>
        </>
    )
}

export default DetailBox