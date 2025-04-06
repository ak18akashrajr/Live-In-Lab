// CameraFeed.js
import React from "react";
// import "./CameraFeed.css";

const CameraFeed = ({ title = "Live Camera Feed" }) => {
  return (
    <div className="camera-section">
      <h3>{title}</h3>
      <div className="camera-feed">
        <img
          src="http://100.76.185.27:8080/video"
          title={title}
          allow="autoplay"
          scrolling="no"
        />
      </div>
    </div>
  );
};
export default CameraFeed;