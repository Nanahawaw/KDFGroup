// import React from 'react'
import "./App.css"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/NabBar"
import Home from "./components/Home"
// import HighestRated from "./components/highestRated/HighestRatedPage"
import AuthPage from "./authentication/AuthPage"
import TrendingNow from "./pages/TrendingNow"
// import EpisodeRecaps from "./pages/EpisodeRecaps"
import HighestRatedPage from "./components/highestRated/HighestRatedPage"
import AboutUs from "./pages/AboutUs"
import Community from "./pages/Community"
import EpisodeRecapsPage from "./components/episodeRecaps/EpisodeRecapsPage"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div id="main-content" className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Auth" element={<AuthPage />} />
            <Route path="/TrendingNow" element={<TrendingNow />} />
            <Route path="/EpisodeRecaps" element={<EpisodeRecapsPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/HighestRated" element={<HighestRatedPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
