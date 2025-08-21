import { useState } from 'react';
import Player from './components/Player/Player';
import TrackList from './components/TrackList/TrackList';
import FollowButton from './components/FollowButton/FollowButton';
import { trackData, userData } from './data';
import './App.css';

function App() {
  const [currentTrack, setCurrentTrack] = useState(trackData[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = trackData.findIndex(
      (track) => track.id === currentTrack.id
    );
    const nextIndex = (currentIndex + 1) % trackData.length;
    setCurrentTrack(trackData[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = trackData.findIndex(
      (track) => track.id === currentTrack.id
    );
    const prevIndex = (currentIndex - 1 + trackData.length) % trackData.length;
    setCurrentTrack(trackData[prevIndex]);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="profile">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
          <h2 className="profile-name">Lofi Vibes</h2>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">{userData.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{userData.following}</span>
              <span className="stat-label">Following</span>
            </div>
          </div>
          <FollowButton />
        </div>
        <TrackList
          tracks={trackData}
          currentTrack={currentTrack}
          onSelectTrack={handleSelectTrack}
        />
      </div>
      <div className="main-content">
        <Player
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
}

export default App;
