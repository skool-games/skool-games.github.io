import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Contact from "./contact";
import PrivacyPolicy from "./privacy-policy";
import TermsOfService from "./terms-of-service";
import Footer from "./footer";
import Home from './home';
import GameDetail from "./game-details";
import { useState } from 'react';
import gameData from './games.json';

function App() {
  const [games] = useState(gameData.games || []);

  const [filteredGames, setFilteredGames] = useState(gameData.games || []);

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
      <Navbar onSearch={handleSearch} />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home games={filteredGames} />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
