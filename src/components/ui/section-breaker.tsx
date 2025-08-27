import React from "react";

// MUI
import { Box } from "@mui/material";

const SectionBreaker: React.FC = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: '1px',
                bgcolor: '#B3B3B3',
                opacity: .3,
                mt: 10,
                mb: 10
            }}></Box>
        </>
    )
}

export default SectionBreaker