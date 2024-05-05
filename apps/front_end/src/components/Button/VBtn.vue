<template>
    <div>
      <button :class="computedClass" @click="handleClick">{{ computedText }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      buttonText: String,
      onClick: Function,
      customClass: String
    },
    computed: {
      computedText() {
        return this.buttonText || 'Enregistrer';
      },
      computedClass() {
        return this.customClass || 'btn btn-primary';
      }
    },
    methods: {
      handleClick() {
        if (this.onClick) {
          this.onClick();
        }
      }
    }
  };
  </script>
  