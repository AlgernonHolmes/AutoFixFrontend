
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VehicleForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';
import RepairForm from './components/RepairForm';
import CompleteRepair from './components/CompleteRepair';

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
          <Route path="/complete/repair" element={<CompleteRepair/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

