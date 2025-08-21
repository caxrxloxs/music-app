import { useState } from 'react';
import './FollowButton.css';

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      className={`follow-btn ${isFollowing ? 'following' : ''}`}
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
