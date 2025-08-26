import React from "react"

// MUI
import { Box } from "@mui/material"

// components
import Topbar from "./components/ui/topbar"
import Welcome from "./components/welcome/welcome"


const App: React.FC = () => {
  return (
    <>
      <Topbar positionalString="welcome" />

      <Box sx={{
        pl: '12vw',
        pr: '12vw',
        mt: 12
      }}>
        <Welcome />
      </Box>
    </>
  )
}

export default App
