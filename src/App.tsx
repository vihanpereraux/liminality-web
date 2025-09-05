import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// MUI
// import { Box } from '@mui/material'

// pages
import Home from "./pages/home"
import ChamberOne from "./pages/chamber-one"
import ChamberTwo from "./pages/chamber-two"
import ChamberThree from "./pages/chamber-three"
import Tunnel from "./pages/tunnel"

// hooks
import { useLenis } from "./hooks/useLenis"

const AppContent: React.FC = () => {
  // const location = useLocation();

  return (
    <>
      {/* {location.pathname !== "/tunnel" && (
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
      )} */}
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/chamber-one" Component={ChamberOne}></Route>
        <Route path="/chamber-two" Component={ChamberTwo}></Route>
        <Route path="/chamber-three" Component={ChamberThree}></Route>
        <Route path="/tunnel" Component={Tunnel}></Route>
      </Routes>
    </>
  )
}

const App: React.FC = () => {
  useLenis()

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
