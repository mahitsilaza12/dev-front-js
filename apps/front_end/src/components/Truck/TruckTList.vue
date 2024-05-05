<template>
  <div class="truck-list container">
    <h2>Ajout camion</h2>
    <div class="button-row">
      <TruckForm/>
    </div>
    <div class="mt-4 mb-4">
      <h2>List camion</h2>
    </div>
    <div class="card-container">
      <Card v-for="truck in trucks" :key="truck._id" :truck="truck" @showAlert="showAlert">
      <button class="btn btn-close" @click="showAlert(truck)">X</button>
        <div class="card-body">
          <h5 class="card-title">Identification: {{ truck._id }}</h5>
          <p class="card-text">Largeur: {{ truck.width }} cm</p>
          <p class="card-text">Longueur: {{ truck.length }} cm</p>
          <p class="card-text">Poid: {{ truck.maxWeight }} Kg</p>
          <p class="card-text">Modèle: {{ truck.licensePlate }}</p>
        </div>
      </Card>
    </div>
    <div v-if="trucks.length === 0" class="empty-truck-list">
      Aucun camion disponible.
    </div>
    <AlertModalTruck ref="deleteAlert" />
  </div>
</template>

<script>
import AlertModalTruck from './DeleteModal.vue'
import Card from '../Card/Card.vue';
import TruckForm from './TruckForm.vue';

export default {
  props: {
    trucks: {
      type: Array,
      required: true
    }
  },
  components: {
    Card,TruckForm,
    AlertModalTruck
  },
  methods: {
    showModal() {
      this.$refs.form.showModal();
    },
    showAlert(truck) {
      this.$refs.deleteAlert.showAlert(truck);
    },
  }
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.btn-close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  color: rgba(255, 0, 0, 0.7); 
  border: none;
  background: none;
  cursor: pointer;
}

.btn-close:hover {
  color: rgba(255, 0, 0, 1); 
}

</style>
