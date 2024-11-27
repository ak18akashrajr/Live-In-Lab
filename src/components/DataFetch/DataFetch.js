

// import React, { useEffect, useState } from 'react';
// import data from './data.json'; 
// import './DataFetch.css';

// const DataFetch = () => {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const fetchData = () => {
//       setUserData(data);
//     };
//     fetchData();
//     const intervalId = setInterval(fetchData, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="datafetch-container">
//       <h1>System Data</h1>
//       <div className="grid-container">
//         <div className="grid-item">
//           <h2>Battery</h2>
//           <p><strong>Current:</strong> {userData.battery?.current} A</p>
//           <p><strong>Percentage:</strong> {userData.battery?.percentage} %</p>
//           <p><strong>Voltage:</strong> {userData.battery?.voltage} V</p>
//         </div>

//         <div className="grid-item">
//           <h2>Location</h2>
//           <p><strong>Latitude:</strong> {userData.location?.latitude}</p>
//           <p><strong>Longitude:</strong> {userData.location?.longitude}</p>
//           <p><strong>Altitude:</strong> {userData.location?.altitude ?? 'N/A'}</p>
//         </div>

//         <div className="grid-item">
//           <h2>Satellite</h2>
//           <p><strong>Fix Type:</strong> {userData.sat?.fix_type}</p>
//           <p><strong>Number of Satellites:</strong> {userData.sat?.num_of_sat}</p>
//         </div>

//         <div className="grid-item">
//           <h2>System</h2>
//           <p><strong>Is Armable:</strong> {userData.is_armable ? 'Yes' : 'No'}</p>
//           <p><strong>Last Heartbeat:</strong> {userData.last_heartbeat} s</p>
//           <p><strong>Mode:</strong> {userData.mode}</p>
//           <p><strong>System Status:</strong> {userData.system_status}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataFetch;


import React, { useEffect, useState } from 'react';
import './DataFetch.css';

const DataFetch = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.38.34:5000/get_data');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 1000); // Polling every 1 second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="datafetch-container">
      <h1>System Data</h1>
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className="grid-container">
          <div className="grid-item">
            <h2>Battery</h2>
            <p><strong>Current:</strong> {userData.battery?.current} A</p>
            <p><strong>Percentage:</strong> {userData.battery?.percentage} %</p>
            <p><strong>Voltage:</strong> {userData.battery?.voltage} V</p>
          </div>

          <div className="grid-item">
            <h2>Location</h2>
            <p><strong>Latitude:</strong> {userData.location?.latitude}</p>
            <p><strong>Longitude:</strong> {userData.location?.longitude}</p>
            <p><strong>Altitude:</strong> {userData.location?.altitude ?? 'N/A'}</p>
          </div>

          <div className="grid-item">
            <h2>Satellite</h2>
            <p><strong>Fix Type:</strong> {userData.sat?.fix_type}</p>
            <p><strong>Number of Satellites:</strong> {userData.sat?.num_of_sat}</p>
          </div>

          <div className="grid-item">
            <h2>System</h2>
            <p><strong>Is Armable:</strong> {userData.is_armable ? 'Yes' : 'No'}</p>
            <p><strong>Last Heartbeat:</strong> {userData.last_heartbeat} s</p>
            <p><strong>Mode:</strong> {userData.mode}</p>
            <p><strong>System Status:</strong> {userData.system_status}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataFetch;
