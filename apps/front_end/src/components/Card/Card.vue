<template>
    <div class="card">
      <div class="card-body">
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardView',
    props: {
      size: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      }
    },
    methods: {
      closeCard() {
        this.$emit('closeCard');
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #fff; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    position: relative; 
  }
  
  .card-body {
    padding: 20px;
  }
  </style>
  