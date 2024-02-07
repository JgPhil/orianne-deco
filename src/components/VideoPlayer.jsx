import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video controls autoPlay muted preload="auto">
        <source src="/videos/autumn.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de la vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;

