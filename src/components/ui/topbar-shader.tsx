import React from "react";

// MUI
import { Box } from "@mui/material";

const TopbarShader: React.FC = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: 90,
                position: 'fixed',
                top: 0,
                zIndex: 1,
                background: 'linear-gradient(to bottom, #000000ff 0%, rgba(0, 0, 0, .75) 50%, rgba(0, 0, 0, 0) 100%)',
            }}></Box>
        </>
    )
}

export default TopbarShader