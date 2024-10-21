// import React from 'react'
import "./App.css"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AuthPage from "./authentication/AuthPage"
import HighestRatedPage from "./components/highestRated/HighestRatedPage"
import AboutUs from "./components/AboutUs"
import CommunityPage from "./components/community/CommunityPage"
import EpisodeRecapsPage from "./components/episodeRecaps/EpisodeRecapsPage"
import TrendingNowPage from "./components/trendingNow/TrendingNowPage"
import UserProfile from "./pages/UserProfile"

function App() {
  return (
    <Router>
      <div className="min-h-screen grid m-0">
        <NavBar />
        <div id="main-content" className="m-0">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Auth" element={<AuthPage />} />
            <Route path="/TrendingNow" element={<TrendingNowPage />} />
            <Route path="/EpisodeRecaps" element={<EpisodeRecapsPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Community" element={<CommunityPage />} />
            <Route path="/HighestRated" element={<HighestRatedPage />} />
            <Route path="/UserProfile" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
