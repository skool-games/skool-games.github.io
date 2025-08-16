import React from "react";
import Card from "./card";
import "./home.css";

function Home({ games }) {

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to Skool Games</h1>
        <p>Skool Games offers easy access to a wide range of games for endless fun!</p>
        <p>Explore top HTML5 games with Skool Games right now</p>
        <p>Click Ctrl + D to see magic</p>
        <p>Play the best HTML5 games G+ instantly! Skool Games offers a massive library of G-Plus games that work on any school Chromebook. No blocks, no downloads. Just instant fun and joy.</p>
      </div>
      <div className="home-container">
        {games && games.map((game) => (
          <Card key={game.id} games={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;
