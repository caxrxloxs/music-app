import TrackItem from '../TrackItem/TrackItem';
import './TrackList.css';

const TrackList = ({ tracks, currentTrack, onSelectTrack }) => {
  return (
    <div className="track-list">
      <h2 className="track-list-title">Tracks</h2>
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          isActive={currentTrack?.id === track.id}
          onSelect={onSelectTrack}
        />
      ))}
    </div>
  );
};

export default TrackList;