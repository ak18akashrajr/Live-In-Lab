// src/Components/PortSurveillance/PortSurveillance.js

import React from 'react';
import './PortSurveillance.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
const PortSurveillance = () => {
  return (
    <div className="port-page">
      <h1>Port Surveillance</h1>
      <p>Live drone feed and security monitoring</p>

      <div className="main-grid">
        <div className="port-info">
          <div className="drone-card">
            <h3>Port Drone</h3>
            <p><strong>Latitude:</strong> 12.9205</p>
            <p><strong>Longitude:</strong> 80.1293</p>
            <p><strong>Battery:</strong> 75%</p>
            <p><strong>Ship Detection:</strong> 3 vessels</p>
            <p><strong style={{ color: 'red' }}>🛑 Unrecognized Entries:</strong> 2 vessels</p>
            <p><strong>Cargo Status:</strong> Loading</p>
          </div>
        </div>

        <div className="video-feed">
          <img
            src="http://100.76.185.27:8080/video"
            alt="Port Drone Live Feed"
          />
        </div>
      </div>

      <div className="metrics-section">
        <div className="metric-card">
          <h2>🚢 Ship Movement Density</h2>
          <p>8 vessels / hour</p>
        </div>
        <div className="metric-card">
          <h2>🚨 Security Alert</h2>
          <p>None Detected</p>
        </div>
      </div>
      <div className="classification-section">
        <h2>📦 Detected Boat Types (ML Model)</h2>
        <div className="boat-grid">
          <div className="boat-type ship">🛳️ Ships: 2</div>
          <div className="boat-type boat">⛵ Boats: 3</div>
          <div className="boat-type dinghy">🚤 Dinghies: 1</div>
          <div className="boat-type barge">🛶 Barges: 0</div>
        </div>
      </div>
      
      <div className="map-section">
        <h2>🗺️ Kochi Port Overview</h2>
        <MapContainer center={[9.9667, 76.2667]} zoom={13} scrollWheelZoom={false} className="map-container">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[9.9667, 76.2667]}>
            <Popup>Kochi Port</Popup>
          </Marker>
        </MapContainer>
      </div>
      <h2>iFrame Link Venum -_-</h2>
    </div>
  );
};

export default PortSurveillance;
