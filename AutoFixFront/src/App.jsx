
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VehicleForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';
import RepairForm from './components/RepairForm';
import RepairList from './components/RepairList';
import VehicleReceipt from './components/VehicleReceipt';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<VehicleForm/>}></Route>
          <Route path="/list" element={<VehicleList/>}></Route>
          <Route path="/add/repair" element={<RepairForm/>}></Route>
          <Route path="/list/repair" element={<RepairList/>}></Route>
          <Route path="/receipt" element={<VehicleReceipt/>}></Route>
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;
