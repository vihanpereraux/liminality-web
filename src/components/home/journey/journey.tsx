import React from "react";

// MUI
import { Box } from "@mui/material";

// components
import Paragraph from "../../ui/paragraph";
import RippleImage from "./wavy-image";

// hooks
import { useViewportWidth } from "../../../hooks/useViewportWidth";

// utils
import { journeyContent } from "../../../utils/journey-content";

const Journey: React.FC = () => {
    let viewportWidth: number = useViewportWidth();
    
    return (
        <>
            {viewportWidth > 1024 ? (
                <>
                    {journeyContent.map((item, index) => (
                        <Box key={index}>
                            <Box sx={{ mt: 3, mb: 5 }}>
                                <Paragraph uppercase={true} content={item.content} />
                            </Box>

                            <Box sx={{
                                width: '100%',
                                height: '540px',
                                position: 'relative',
                                mb: 6,
                            }}>
                                <RippleImage image={item.imageIndex} />
                            </Box>
                        </Box>
                    ))}
                </>
            ) : (
                <>
                    {journeyContent.map((item, index) => (
                        <Box key={index}>
                            <Box sx={{ mt: 3, mb: 5 }}>
                                <Paragraph uppercase={true} content={item.content} />
                            </Box>

                            <Box sx={{ mt: 0, mb: 6 }}>
                                <img style={{ width: '100%' }} src={item.imageIndex} alt="" />
                            </Box>
                        </Box>
                    ))}
                </>
            )}
        </>
    )
}

export default Journey