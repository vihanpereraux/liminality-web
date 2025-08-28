import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/home"
import ChamberOne from "./pages/chamber-one"
import ChamberTwo from "./pages/chamber-two"
import Tunnel from "./pages/tunnel"

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/chamber-one" Component={ChamberOne}></Route>
          <Route path="/chamber-two" Component={ChamberTwo}></Route>
          <Route path="/tunnel" Component={Tunnel}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
