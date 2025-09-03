import React from "react";

// MUI
import { Typography } from "@mui/material";

// props
import type { ParagraphProps } from "../../interfaces/props";

const Paragraph: React.FC<ParagraphProps> = ({ content }) => {
    return (
        <>
            <Typography sx={{
                color: '#ACACAC',
                fontSize: 14,
                textTransform: 'uppercase',
                fontFamily: 'GeistMono-Regular',
                lineHeight: 1.65,
                letterSpacing: 1.45,
                textIndent: 100,
                opacity: .85
            }}>{content}</Typography>
        </>
    )
}

export default Paragraph