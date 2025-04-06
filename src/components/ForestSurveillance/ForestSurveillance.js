// ForestSurveillance.js
import React from "react";
import "./ForestSurveillance.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker path
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ForestSurveillance = () => {
  return (
    <div className="forest-wrapper">
      <h2>Forest Surveillance Dashboard</h2>
      <h2>Track forest conditions and monitor wildfire risks.</h2>
      <div className="forest-grid">
        <div className="forest-info">
          <div className="info-card">
            <h3>Drone Data</h3>
            <p><strong>Latitude:</strong> 11.2345</p>
            <p><strong>Longitude:</strong> 77.6543</p>
            <p><strong>Battery:</strong> 76%</p>
          </div>
          <div className="info-card">
            <h3>Wildlife Detection</h3>
            <p><strong>Species:</strong> Tiger, Deer</p>
            <p><strong>Count:</strong> 4</p>
          </div>
          <div className="info-card alert">
            <h3>Fire Alert</h3>
            <p><strong>Status:</strong> 🔥 High near Zone C</p>
            <p><strong>Severity:</strong> Critical</p>
          </div>
        </div>

        {/* Right Column: Camera + Map */}
        <div className="forest-media">
          <div className="camera-section">
            <h3>Live Drone Camera</h3>
            <div className="camera-feed">
              <img
                src="http://100.76.185.27:8080/video"
                title="Forest Camera Feed"
                allow="autoplay"
                scrolling="no"
              />
            </div>
          </div>

          <div className="map-section">
            <h3>Forest Map Overview</h3>
            <MapContainer center={[11.2345, 77.6543]} zoom={13} scrollWheelZoom={false} className="forest-map">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[11.2345, 77.6543]}>
                <Popup>Drone Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestSurveillance;
