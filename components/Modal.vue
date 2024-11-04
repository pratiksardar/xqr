<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out" @click.self="closeModal">
    <div class="bg-white p-4 rounded-lg shadow-lg relative transform transition-transform duration-300 ease-in-out scale-95" :class="{ 'scale-100': visible }">
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        &times;
      </button>
      <div class="text-center">
        <h2 class="text-lg font-bold mb-4">{{ platformName }}</h2>
        <a :href="url" target="_blank" class="text-blue-500 underline">
          {{ username }}
        </a>
        <div class="p-4 bg-gray-200 rounded-lg shadow-inner mt-4 flex justify-center items-center">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  platformName: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const username = computed(() => {
  const urlParts = props.url.split('/')
  return urlParts[urlParts.length - 1]
})
</script>

<style scoped>
/* Add any additional styles here */
</style>