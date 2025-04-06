import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FloodManagement from './components/FloodManagement/FloodManagement';
import PortSurveillance from './components/PortSurveillance/PortSurveillance';
import ForestSurveillance from './components/ForestSurveillance/ForestSurveillance';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flood-management" element={<FloodManagement />} />
        <Route path="/port-surveillance" element={<PortSurveillance />} />
        <Route path="/forest-surveillance" element={<ForestSurveillance />} />
      </Routes>
    </Router>
  );
}

export default App;
