<template>
  <main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
    <div class="text-center">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-800">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-600">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap space-x-2 space-y-2"
    >
      <span v-if="acc.em" class="p-1">
        <div @click="showQRCode(`mailto:${acc.em}`, 'Email')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="mdi:email" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.ph" class="p-1">
        <div @click="showQRCode(`tel:${acc.ph}`, 'Phone')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="ph:phone" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.t" class="p-1">
        <div @click="showQRCode(`https://twitter.com/${acc.t}`, 'Twitter')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="ph:twitter-logo-duotone" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.tg" class="p-1">
        <div @click="showQRCode(`https://t.me/${acc.tg}`, 'Telegram')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="ph:telegram-logo-duotone" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.w" class="p-1">
        <div @click="showQRCode(`https://wa.me/${acc.w}`, 'WhatsApp')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="mdi:whatsapp" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.l" class="p-1">
        <div @click="showQRCode(`https://linkedin.com/in/${acc.l}`, 'LinkedIn')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="entypo-social:linkedin" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.f" class="p-1">
        <div @click="showQRCode(`https://facebook.com/${acc.f}`, 'Facebook')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="entypo-social:facebook" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.ig" class="p-1">
        <div @click="showQRCode(`https://instagram.com/${acc.ig}`, 'Instagram')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="ph:instagram-logo-duotone" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.y" class="p-1">
        <div @click="showQRCode(`https://youtube.com/${acc.y}`, 'YouTube')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="mdi:youtube" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.gh" class="p-1">
        <div @click="showQRCode(`https://github.com/${acc.gh}`, 'GitHub')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="entypo-social:github" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.dc" class="p-1">
        <div @click="showQRCode(`https://discord.com/users/${acc.dc}`, 'Discord')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="ph:discord-logo-duotone" class="h-8 w-8" />
        </div>
      </span>
      <span v-if="acc.fc" class="p-1">
        <div @click="showQRCode(`https://farcaster.xyz/${acc.fc}`, 'Farcaster')" class="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Icon icon="material-symbols:fort-outline" class="h-8 w-8" />
        </div>
      </span>
    </div>
    <ul class="space-y-2">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
    </ul>
    <Modal :visible="qrCodeUrl !== null" :platformName="qrCodePlatform" :url="qrCodeUrl" @close="qrCodeUrl = null">
      <QrCode :text="qrCodeUrl" />
    </Modal>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import QrCode from '../QrCode.vue'
import Modal from '../Modal.vue'
import ExternalLink from '../ExternalLink.vue'

const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const qrCodeUrl = ref(null)
const qrCodePlatform = ref('')

const showQRCode = (url, platform) => {
  qrCodeUrl.value = url
  qrCodePlatform.value = platform
}

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.t &&
    !props.acc.ig &&
    !props.acc.gh &&
    !props.acc.dc &&
    !props.acc.tg &&
    !props.acc.fc &&
    !props.acc.ph &&
    !props.acc.w &&
    !props.acc.l &&
    !props.acc.em
  );
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>