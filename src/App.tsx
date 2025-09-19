import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/home"
import ChamberOne from "./pages/chamber-one"
import ChamberTwo from "./pages/chamber-two"
import ChamberThree from "./pages/chamber-three"
import Tunnel from "./pages/tunnel"
import ChamberFour from "./pages/chamber-four"

// hooks
import { useLenis } from "./hooks/useLenis"

const AppContent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/chamber-one" Component={ChamberOne}></Route>
        <Route path="/chamber-two" Component={ChamberTwo}></Route>
        <Route path="/chamber-three" Component={ChamberThree}></Route>
        <Route path="/tunnel" Component={Tunnel}></Route>
        <Route path="/chamber-four" Component={ChamberFour}></Route>
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
