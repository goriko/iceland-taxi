import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AirportTransfer from './pages/AirportTransfer';
import ChauffeurBooking from './pages/ChauffeurBooking';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport-transfer" element={<AirportTransfer />} />
        <Route path="/chauffeur-booking/:serviceId" element={<ChauffeurBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
