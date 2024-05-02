import httpClient from "../http-common";

const getAllVehicles = () => {
    return httpClient.get('/api/v1/vehicle/');
}

const getVehicleByPlate = (registrationPlate) => {
    return httpClient.get(`/api/v1/vehicle/plate/${registrationPlate}`);
}

const createVehicle = (vehicle) => {
    return httpClient.post("/api/v1/vehicle/", vehicle);
}

const updateVehicleById = (id, updatedVehicle) => {
    return httpClient.put(`/api/v1/vehicle/${id}`, updatedVehicle);
}

const updateVehicle = (updatedVehicle) => {
    return httpClient.put("/api/v1/vehicle/", updatedVehicle);
}

const deleteVehicleById = (id) => {
    return httpClient.delete(`/api/v1/vehicle/${id}`);
}

const deleteVehicleByPlate = (plate) => {
    return httpClient.delete(`/api/v1/vehicle/plate/${plate}`);
}

export default { 
    getAllVehicles, 
    getVehicleByPlate, 
    createVehicle, 
    updateVehicleById, 
    updateVehicle, 
    deleteVehicleById, 
    deleteVehicleByPlate 
};
