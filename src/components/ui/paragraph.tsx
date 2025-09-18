import React from "react";

// MUI
import { Typography } from "@mui/material";

// props
import type { ParagraphProps } from "../../interfaces/props";

const Paragraph: React.FC<ParagraphProps> = ({ content, uppercase }) => {
    return (
        <>
            <Typography sx={{
                color: '#ACACAC',
                fontSize: uppercase ? 12 : 15,
                textTransform: uppercase ? "uppercase" : "lowercase",
                fontFamily: 'GeistMono-Regular',
                lineHeight: 1.65,
                letterSpacing: uppercase ? 1.45 : 1.15,
                textIndent: 100,
                opacity: .85
            }}>{content}</Typography>
        </>
    )
}

export default Paragraph