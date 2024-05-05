import { createStore } from 'vuex';
import truckModule from './modules/Truck';

export default createStore({
  modules: {
    truck: truckModule
  }
});
