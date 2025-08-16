import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Contact from "./contact";
import PrivacyPolicy from "./privacy-policy";
import TermsOfService from "./terms-of-service";
import Footer from "./footer";
import Home from "./home";
import GameDetail from "./game-details";
import React, { useState, useEffect } from "react";
import gameData from "./games.json";
import Settings from "./settings";
import Copyright from "./copyright";
import About from "./about";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [games] = useState(gameData.games || []);
  const [filteredGames, setFilteredGames] = useState(gameData.games || []);

  // Load saved theme on initial render
  useEffect(() => {
    const savedSettings = localStorage.getItem('skoolGamesSettings');
    if (savedSettings) {
      const { theme } = JSON.parse(savedSettings);
      document.body.className = theme;
    }
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredGames(games);
      return;
    }

    const result = games.filter((game) =>
      game.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(result);
  };

  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar onSearch={handleSearch} />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home games={filteredGames} />} />
            <Route path="/game/:id" element={<GameDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
