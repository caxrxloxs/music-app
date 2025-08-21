import './TrackItem.css';

const TrackItem = ({ track, isActive, onSelect }) => {
  return (
    <div
      className={`track-item ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(track)}
    >
      <img src={track.cover} alt={track.title} className="track-cover" />
      <div className="track-info">
        <h3 className="track-title">{track.title}</h3>
        <p className="track-artist">{track.artist}</p>
      </div>
      <span className="track-duration">{track.duration}</span>
    </div>
  );
};

export default TrackItem;
