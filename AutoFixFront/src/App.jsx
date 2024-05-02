
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VehicleForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<VehicleForm/>}></Route>
          <Route path="/list" element={<VehicleList/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

