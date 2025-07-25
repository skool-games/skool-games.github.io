import React from "react";
import Card from "./card";
import "./home.css";

function Home({ games }) {

  return (
    <div className="home-container">
      {games && games.map((game) => (
        <Card key={game.id} games={game} />
      ))}
    </div>
  );
}

export default Home;
