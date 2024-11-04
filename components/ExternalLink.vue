<template>
  <li>
    <div class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
      <div class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
        <Icon v-if="icon" :icon="icon" class="h-5 w-5" />
        <Icon v-else icon="ph:link-simple" class="h-5 w-5" />
      </div>
      <div class="w-full flex-grow min-w-0">
        <a :href="url" target="_blank" class="font-medium text-sm leading-6 text-blue-500 underline">
          {{ label }}
        </a>
      </div>
      <button @click="showQRCode(url, label)" class="ml-2">
        <Icon icon="mdi:qrcode" class="h-8 w-8 text-gray-500" />
      </button>
    </div>
    <Modal :visible="qrCodeUrl === url" @close="qrCodeUrl = null">
      <QrCode :text="qrCodeUrl" />
    </Modal>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import QrCode from './QrCode.vue'
import Modal from './Modal.vue'

const props = defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: '' },
  url: { type: String, required: true },
})

const qrCodeUrl = ref(null)
const showQRCode = (linkUrl) => {
  qrCodeUrl.value = linkUrl
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>