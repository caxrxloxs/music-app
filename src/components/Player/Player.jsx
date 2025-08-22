import { useState, useEffect } from 'react';
import './Player.css';

const Player = ({
  currentTrack,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!currentTrack) return null;

  return (
    <div className="player-full-width">
      <div className="track-display">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="current-track-cover"
        />
        <div className="track-details">
          <h3 className="current-track-title">{currentTrack.title}</h3>
          <p className="current-track-artist">{currentTrack.artist}</p>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="player-controls">
        <button className="control-btn" onClick={onPrevious}>
          <svg viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>
        <button className="play-pause-btn" onClick={onPlayPause}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button className="control-btn" onClick={onNext}>
          <svg viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Player;
