<template>
    <Form @submit="submitData" :validation-schema="truck" v-slot="{ errors }">
      <div class="input-row">
        <div>
          <Field
            name="width"
            type="number"
            placeholder="Largeur en cm"
            :class="{'is-invalid': errors.width}"
            v-model="truck.width"
          />
          <div class="invalid-feedback">{{ errors.width }}</div>
        </div>
        <div>
          <Field
            name="length"
            type="number"
            placeholder="Longueur en cm"
            :class="{'is-invalid': errors.length}"
            v-model="truck.length"
          />
          <div class="invalid-feedback">{{ errors.length }}</div>
        </div>
        <div>
          <Field
            name="maxWeight"
            type="number"
            placeholder="charge en kg"
            :class="{'is-invalid': errors.maxWeight}"
            v-model="truck.maxWeight"
          />
          <div class="invalid-feedback">{{ errors.maxWeight }}</div>
        </div>
        <div>
          <Field
            name="licensePlate"
            type="text"
            placeholder="immatriculation"
            :class="{'is-invalid': errors.licensePlate}"
            v-model="truck.licensePlate"
          />
          <div class="invalid-feedback">{{ errors.licensePlate }}</div>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter un camion</button>
      </div>
    </Form>
  </template>
  
  <script>
  import { Form, Field } from 'vee-validate';
  import * as Yup from 'yup';
  import { mapActions } from 'vuex';
  
  export default {
    components: {
      Form,
      Field
    },
    data() {
        const truck = Yup.object().shape({
            width: Yup.number()
                .required('La largeur est requise')
                .max(240, 'La largeur ne peut pas dépasser 240 cm'),
            length: Yup.number()
                .required('Le longueur est requise')
                .max(1320, 'La longueur ne peut pas dépasser 1320 cm'),
            licensePlate: Yup.string()
                .required('Le numéro d\'immatriculation est requis')
                .matches(/^(?!ss|ww|.[iou]|[iou].)[a-z]{2}[-\s]?\d{3}[-\s]?(?!ss|ww|.[iou]|[iou].)[a-z]{2}$/, 'La plaque d\'immatriculation doit correspondre au format SIV'),
            maxWeight: Yup.number()
                .required('Le poids est requis')
                .max(28000, 'La charge maximale ne peut pas dépasser 28 000 kg'),
            });
      return {
        truck,
      };
    },
    methods: {
        ...mapActions('truck', ['AddTruck']),
        async submitData() {
            const truckData = {
                width: this.truck.width,
                length: this.truck.length,
                maxWeight: this.truck.maxWeight,
                licensePlate: this.truck.licensePlate
            };
            await this.AddTruck(truckData);
            this.truck = {
                width: null,
                length: null,
                maxWeight: null,
                licensePlate: null
            };
        }
    },
  };
  </script>
  
  <style scoped>
  .input-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .is-invalid {
    border-color: red;
  }
  </style>
  