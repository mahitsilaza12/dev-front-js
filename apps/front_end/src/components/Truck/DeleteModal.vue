<template>
    <div>
      <CustomModal size="medium" name="modal-delete-truck" v-if="modalVisible">
        <template #header>
          <h2>Supprimer un camion</h2>
        </template>
        <template #body>
          <p>{{ identification }}</p>
        </template>
        <template #footer>
          <span v-if="loading" class="spinner-border spinner-border-sm mr-2" role="status"></span>
          <button class="delete" @click="removeTruck" :disabled="loading">Supprimer</button>
          <button class="cancel" @click="closeModal" :disabled="loading">Annuler</button>
        </template>
      </CustomModal>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import CustomModal from '../Modal/Modal.vue';
  import { useStore } from 'vuex';
  
  export default {
    name: 'AlertModalTruck',
    components: {
      CustomModal
    },
    setup() {
      const modalVisible = ref(false); 
      const truck = ref({});
      const identification = ref(''); 
      const loading = ref(false);
      const store = useStore();
  
      const showAlert = (truckData) => {
        truck.value = truckData;
        identification.value = `Identification: ${truckData._id}`;
        modalVisible.value = true;
      };
  
      const removeTruck = async () => {
        loading.value = true;
        
        await new Promise(resolve => setTimeout(resolve, 3000));

        try {
            await store.dispatch('truck/RemoveTruck', { id: truck.value._id });
            closeModal();
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = false; 
        }
        };

  
      const closeModal = () => {
        modalVisible.value = false;
        truck.value = {};
      };
  
      return {
        modalVisible,
        identification,
        showAlert,
        removeTruck,
        closeModal,
        loading 
      };
    }
  };
  </script>
  
<style scoped>
    button.delete,
    button.cancel {
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        cursor: pointer;
    }

    button.delete {
        background-color: red;
        color: #fff;
        border: 1px solid #007bff;
        margin-right: 4px;
    }

    button.cancel {
        background-color: #6c757d;
        color: #fff;
        border: 1px solid #6c757d;
    }

    button.delete:hover,
    button.cancel:hover {
        background-color: black;
        border-color: #0056b3;
    }

</style>