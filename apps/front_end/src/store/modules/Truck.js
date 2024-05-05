import { getAllTrucks , createTruck, updateTruck, deleteTruck} from "@/service/Truck/TruckService";

const truckModule = {
    namespaced: true,

    state: {
        trucks: []
    },

    mutations: {
        setTrucks(state, trucks) {
            state.trucks = trucks;
        }
    },

    actions: {
        async fetchTrucks({ commit }) {
            try {
                const trucks = await getAllTrucks();
                commit('setTrucks', trucks);
            } catch (error) {
                handleError(error);
            }
        },
        async AddTruck({ dispatch}, truckData) {
            try {
                await createTruck(truckData);
                dispatch('fetchTrucks');
            } catch (error) {
                handleError(error)
            }
        },
        async UpdateTrucks({ dispatch }, {id, truckData}) {
            try {
                await updateTruck(id, truckData)
                dispatch('fetchTrucks');
            } catch (error) {
                handleError(error)
            }
        },
        async RemoveTruck({ dispatch }, {id}) {
            try {
                await deleteTruck(id);
                dispatch('fetchTrucks')
            } catch (error) {
                handleError(error)
            }
        }
    }
};

const handleError = (error) => {
    console.error(error.message);
};

export default truckModule;
