import React from "react";

// MUI
import { Typography, Box } from "@mui/material";

// utils
import { journeyContent } from "../../utils/journey-content";

const Journey: React.FC = () => {
    return (
        <>
            {journeyContent.map((item, index) => (
                <Box key={index}>
                    <Box>
                        <Typography sx={{
                            color: '#ACACAC',
                            fontSize: 14,
                            textTransform: 'uppercase',
                            fontFamily: 'GeistMono-Light',
                            lineHeight: 1.65,
                            letterSpacing: 1.45
                        }}>
                            {item.content}
                        </Typography>
                    </Box>

                    <Box sx={{
                        mt: 6,
                        mb: 6
                    }}>
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