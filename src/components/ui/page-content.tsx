import React, { useState } from "react";

// MUI
import { Box } from "@mui/material";

// component
// import DotIndicator from "./dot-indicator";
import Paragraph from "./paragraph";
import SectionBreaker from "./section-breaker";

// props
import type { PageContentProps } from "../../interfaces/props";

const PageContent: React.FC<PageContentProps> = ({ heading, content }) => {
    const [uppercase, setUppercase] = useState<boolean>(true);

    return (
        <>
            <SectionBreaker
                heading={heading}
                number=""
                textTransformSelection={true}
                setUppercase={setUppercase} />

            <Box sx={{ mt: 3 }}>
                <Paragraph content={content} uppercase={uppercase} />
            </Box>
        </>
    )
}

export default PageContent