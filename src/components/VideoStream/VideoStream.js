import React from 'react';
import './VideoStream.css';

const VideoStream = () => {
  return (
    <div className="video-container">
        
      <iframe
        src="http://192.168.38.34:5000/get_video" 
        title="Live Stream"
        width="100%"
        height="100%"
        allowFullScreen
      />
    </div>
  );
};

export default VideoStream;
