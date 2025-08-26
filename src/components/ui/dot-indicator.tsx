import React from "react";

// MUI
import { Box } from "@mui/material";

const DotIndicator: React.FC = () => {
    return(
        <>
            <Box sx={{ 
                width: 6,
                height: 6,
                bgcolor: 'black',
                borderRadius: '50%',
             }}></Box>
        </>
    )
}

export default DotIndicator