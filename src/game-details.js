import React from 'react';
import { useParams } from 'react-router-dom';
import gamesData from './games.json';

function GameDetail() {
  const { id } = useParams();
  const gameId = parseInt(id, 10);
  const game = gamesData.games.find(game => game.id === gameId);

  if (!game) return <h2 style={{ color: 'white' }}>Game not found</h2>;

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      <div className="game-content">
        <iframe
          src={game.url}
          title={game.name}
          width="1000px"
          height="500px"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default GameDetail;
