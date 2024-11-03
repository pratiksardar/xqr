<template>
    <i :class="iconClass"></i>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    name: { type: String, required: true },
    class: { type: String, default: '' },
  })
  
  const iconClass = computed(() => `${props.name} ${props.class}`)
  </script>
  
  <style scoped>
  /* Add any additional styles for icons if needed */
  </style>