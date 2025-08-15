import React from "react";
import { useNavigate } from "react-router-dom";
import './card.css'

function Card({ games }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/game/${games.id}`);
    }
    
    return (
        <div className="game-card" onClick={handleClick}>
            <img src={games.image} alt={games.name} className="game-card-image" />
            <h3 className="game-card-title">{games.name}</h3>
        </div>
    )
}

export default Card;