import React from "react"

// MUI
import { Box } from "@mui/material"

// components
import Topbar from "./components/ui/topbar"
import SectionBreaker from "./components/ui/section-breaker"
import Welcome from "./components/welcome/welcome"
import Journey from "./components/journey/journey"

const App: React.FC = () => {
  return (
    <>
      <Topbar positionalString="welcome" />

      <Box sx={{ pl: '12vw', pr: '12vw', mt: 15 }}>
        <Welcome />

        <SectionBreaker heading="journey" number="002" />

        <Journey />

        <SectionBreaker heading="site plan" number="003" />
      </Box>
    </>
  )
}

export default App
