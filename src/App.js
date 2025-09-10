import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AirportTransfer from './pages/AirportTransfer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport-transfer" element={<AirportTransfer />} />
      </Routes>
    </Router>
  );
}

export default App;
