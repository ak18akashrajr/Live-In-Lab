import './App.css';
import { useNavigate } from 'react-router-dom';

const functionalities = [
  {
    title: "Flood Management",
    description: "Monitor flood zones, alerts & predictions in real-time.",
    image: "https://ichef.bbci.co.uk/news/2048/cpsprodpb/1001B/production/_90836556_678c5ba9-3bc1-4237-864c-fa81f8ff720e.jpg",
    path: "/flood-management",
  },
  {
    title: "Port Surveillance",
    description: "Keep an eye on port activity and ensure marine safety.",
    image: "https://www.unitedshippingqatar.com/wp-content/uploads/2020/07/shutterstock_722035285-scaled.jpg",
    path: "/port-surveillance",
  },
  {
    title: "Forest Surveillance",
    description: "Track forest conditions and monitor wildfire risks.",
    image: "https://th.bing.com/th/id/OIP.nDY8qZOKGKYQGOKNAE-oFwHaEK?rs=1&pid=ImgDetMain",
    path: "/forest-surveillance",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1 className="heading">Autonomous Drone Surveillance</h1>
      <div className="grid-container">
        {functionalities.map((item, idx) => (
          <div className="card" key={idx} onClick={() => navigate(item.path)}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <h3>by team neuraSky⚡</h3>
    </div>
  );
}

export default Home;
