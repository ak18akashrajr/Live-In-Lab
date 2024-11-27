// import logo from './logo.svg';
import './App.css';
// import React, { useState, useEffect } from 'react';
import VideoStream from './components/VideoStream/VideoStream';
import GPSFetch from './components/GPSFetch/GPSFetch';
import DataFetch from './components/DataFetch/DataFetch';
import ModelDisplay from './components/ModelDisplay/ModelDisplay';
function App() {
  return (
    <div className="App">
      <h1>Autonomous Drone Surveillance</h1>
      <div className='header-1'><h1>Live Feed</h1></div>
      <VideoStream/>
      <GPSFetch/>
      
      <ModelDisplay/>
      <DataFetch/>

      
    </div>
  );
}

export default App;
