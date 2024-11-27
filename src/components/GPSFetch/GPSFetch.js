


// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './GPSFetch.css';
// import L from 'leaflet';

// // Create a custom icon
// const customIcon = new L.Icon({
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const GPSFetch = () => {
//   const latitude = 13.09;
//   const longitude = 80.27;

//   return (
//     <div className="gps-container">
//       <h1>GPS Fetch</h1>
//       {typeof window !== 'undefined' && (
//         <MapContainer
//           center={[latitude, longitude]}
//           zoom={13}
//           scrollWheelZoom={false}
//           className="map"
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={[latitude, longitude]} icon={customIcon}>
//             <Popup>
//               Current Location: <br /> Latitude: {latitude}, Longitude: {longitude}
//             </Popup>
//           </Marker>
//         </MapContainer>
//       )}
//     </div>
//   );
// };

// export default GPSFetch;




import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './GPSFetch.css';
import L from 'leaflet';

// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const GPSFetch = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the Flask backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.38.34:5000/get_data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const { latitude, longitude } = data.location;
        setLocation({ latitude, longitude });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="gps-container">
      <h1>GPS Data Fetch</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : location.latitude && location.longitude ? (
        typeof window !== 'undefined' && (
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}nh
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={customIcon}
            >
              <Popup>
                Current Location: <br />
                Latitude: {location.latitude}, Longitude: {location.longitude}
              </Popup>
            </Marker>
          </MapContainer>
        )
      ) : (
        <p>Location data is unavailable</p>
      )}
    </div>
  );
};

export default GPSFetch;
