import React from "react";

// MUI
import { Box } from "@mui/material";

// components
import Paragraph from "../../ui/paragraph";

// utils
import { journeyContent } from "../../../utils/journey-content";

const Journey: React.FC = () => {
    return (
        <>
            {journeyContent.map((item, index) => (
                <Box key={index}>
                    <Paragraph content={item.content} />

                    <Box sx={{ mt: 6, mb: 6 }}>
                        <img style={{
                            width: '100%',
                        }} src={item.imageIndex} alt="" />
                    </Box>
                </Box>
            ))}
        </>
    )
}

export default Journey