import ApiService from "../ApiService";

export const getAllTrucks = async () => {
    try {
      const response = await ApiService.get('/trucks');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

export const createTruck = async(truckData) => {
    try {
        const response = await ApiService.post('/trucks', truckData)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export const updateTruck = async(id, truckData) => {
    try {
        const response = await ApiService.put(`/trucks/${id}`, truckData)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export const deleteTruck = async(id) => {
    try {
        const reponse = await ApiService.delete(`/trucks/${id}`);
        return reponse.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

