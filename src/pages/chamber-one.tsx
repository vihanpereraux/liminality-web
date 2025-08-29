import React from "react";

// MUI
import { Box } from "@mui/material";

// components
import Topbar from "../components/ui/topbar";
import ChamberSectionBreaker from "../components/ui/chamber-section-breaker";
import PageHeading from "../components/ui/page-heading";

// utils
import { parentWrapperStyles } from "../utils/wrapper-styles";

const ChamberOne: React.FC = () => {
    return (
        <>
            <Topbar positionalString="chamber one" />

            <Box sx={parentWrapperStyles}>
                <ChamberSectionBreaker headingLeft="title" headingRight="tangible realities" />

                {/* heading */}
                <PageHeading type="multi" content={["states", "of", "matter"]} />
            
                                
            </Box>
        </>
    )
}

export default ChamberOne;