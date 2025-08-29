import React from "react";

// MUI
import { Box } from "@mui/material";

interface DotIconProps {
    bgColor: string
}

const DotIndicator: React.FC<DotIconProps> = ({ bgColor }) => {
    return(
        <>
            <Box sx={{ 
                width: 4.5,
                height: 4.5,
                bgcolor: bgColor,
                borderRadius: '50%',
             }}></Box>
        </>
    )
}

export default DotIndicator