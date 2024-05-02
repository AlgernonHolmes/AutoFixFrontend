import React, { useState, useEffect } from 'react';
import vehicleService from '../services/vehicle.service';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await vehicleService.getAllVehicles();
      setVehicles(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de vehículos:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Registration Plate</b></TableCell>
            <TableCell><b>Brand</b></TableCell>
            <TableCell><b>Model</b></TableCell>
            <TableCell><b>Type</b></TableCell>
            <TableCell><b>Fabrication Year</b></TableCell>
            <TableCell><b>Engine Type</b></TableCell>
            <TableCell><b>Number of Seats</b></TableCell>
            <TableCell><b>Milage</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell>{vehicle.registrationPlate}</TableCell>
              <TableCell>{vehicle.brand}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.type}</TableCell>
              <TableCell>{vehicle.fabricationYear}</TableCell>
              <TableCell>{vehicle.engineType}</TableCell>
              <TableCell>{vehicle.numSeats}</TableCell>
              <TableCell>{vehicle.milage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleList;

