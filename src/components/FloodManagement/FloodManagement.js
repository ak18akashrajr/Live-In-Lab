
import React from "react";
import "./FloodManagement.css";
import CameraFeed from "../Common/CameraFeed";

const FloodManagement = () => {
  return (
    <div className="flood-page">
      <h1>Flood Management</h1>
      <p>Live drone monitoring and data visualization</p>

      {/* Drone Data + Camera Feed */}
      <div className="main-grid">
        <div className="drone-list">
          <div className="single-drone-card">
            <h3>Drone 1</h3>
            <p><strong>Latitude:</strong> 12.9716</p>
            <p><strong>Longitude:</strong> 77.5946</p>
            <p><strong>Battery:</strong> 80%</p>
          </div>
          <div className="single-drone-card">
            <h3>Drone 2</h3>
            <p><strong>Latitude:</strong> 13.0454</p>
            <p><strong>Longitude:</strong> 80.2332</p>
            <p><strong>Battery:</strong> 67%</p>
          </div>
          <div className="single-drone-card">
            <h3>Drone 3</h3>
            <p><strong>Latitude:</strong> 13.0827</p>
            <p><strong>Longitude:</strong> 80.2707</p>
            <p><strong>Battery:</strong> 91%</p>
          </div>
        </div>

        <div className="video-container">
          <img
            src="http://100.76.185.27:8080/video"
            alt="Drone Camera Feed"
          />
        </div>
      </div>

      {/* Water Level + Person Density */}
      <div className="metrics-section">
        <div className="metric-card water-level">
          <h2>🌊 Water Level</h2>
          <p>3.8 meters</p>
        </div>
        <div className="metric-card person-density">
          <h2>👥 Person Density</h2>
          <p>120 people / km²</p>
        </div>
      </div>

      <h2>iFrame Link Venum -_-</h2>
      {/* <CameraFeed title="Live Drone Feed" /> */}
    </div>
  );
};

export default FloodManagement;
