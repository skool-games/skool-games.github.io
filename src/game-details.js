import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import gamesData from './games.json';
import { Maximize, Play } from 'lucide-react';
import './game-details.css';

function GameDetail() {
  const { id } = useParams();
  const gameId = parseInt(id, 10);
  const game = gamesData.games.find(game => game.id === gameId);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!game) return <h2 style={{ color: 'white' }}>Game not found</h2>;

  const handleFullScreen = () => {
    const iframe = document.querySelector('.game-iframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      <div className="game-content">
        <div className="game-wrapper">
          {isPlaying ? (
            <>
              <iframe
                className="game-iframe"
                src={game.url}
                title={game.name}
                width="1000px"
                height="500px"
                allowFullScreen
              />
              <button className="fullscreen-button" onClick={handleFullScreen}>
                <Maximize size={24} />
              </button>
            </>
          ) : (
            <div className="play-overlay">
              <button className="play-button" onClick={handlePlay}>
                <Play size={40} />
                <span>Play Game</span>
              </button>
            </div>
          )}
        </div>
        <div className="game-description">
          <h2>About {game.name}</h2>
          <p>
            Welcome to {game.name}, an exciting online game available on Skool Games! 
            This engaging game offers students a perfect blend of entertainment and learning. 
            {game.name} is carefully selected to ensure it meets school-appropriate standards 
            while maintaining high entertainment value.
          </p>
          <div className="game-keywords">
            <h3>Game Features:</h3>
            <ul>
              <li>School-appropriate content</li>
              <li>Easy to play controls</li>
              <li>Educational value</li>
              <li>Safe for classroom use</li>
              <li>No downloads required</li>
              <li>Works on all devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
