import React, { useEffect, useRef, useState } from "react";
import '../styles/NotFound.css';

const NotFound = () => {
  const [score, setScore] = useState(0);
  const starRef = useRef(null);

  // Move the star to a random position
  const moveStar = () => {
    const star = starRef.current;
    if (star) {
      const x = Math.random() * (window.innerWidth - 60);
      const y = Math.random() * (window.innerHeight - 60);
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
    }
  };

  // Handle the star click event
  const handleStarClick = () => {
    setScore(prev => prev + 1);
    moveStar();
  };

  // Initially move the star when the component mounts
  useEffect(() => {
    moveStar();
  }, []);

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! Page Not Found</p>
      <a href="/" className="notfound-button">Go to Homepage</a>

      {/* GAME OVERLAY - full screen */}
      <div className="game-overlay">
        <h2 className="game-title">Catch the Star 🌟</h2>
        <p className="game-score">Score: {score}</p>
        <div
          ref={starRef}
          className="star"
          onClick={handleStarClick}
        >
          🌟
        </div>
      </div>

      <div className="astronaut"></div>
    </div>
  );
};

export default NotFound;
