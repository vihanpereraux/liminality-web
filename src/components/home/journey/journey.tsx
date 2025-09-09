import React from "react";

// MUI
import { Box } from "@mui/material";

// components
import Paragraph from "../../ui/paragraph";
import RippleImage from "./wavy-image";

// utils
import { journeyContent } from "../../../utils/journey-content";

const Journey: React.FC = () => {
    return (
        <>
            {journeyContent.map((item, index) => (
                <Box key={index}>
                    <Box sx={{ mt: 4, mb: 5 }}>
                        <Paragraph uppercase={true} content={item.content} />
                    </Box>

                    <Box sx={{
                        width: '100%',
                        height: '660px',
                        position: 'relative',
                        mb: 6,
                    }}>
                        <RippleImage image={item.imageIndex} />
                    </Box>
                </Box>
            ))}

            {/* <Box sx={{ mt: 6, mb: 6 }}>
                    <img style={{
                        width: '100%',
                    }} src={item.imageIndex} alt="" />
            </Box> */}
        </>
    )
}

export default Journey