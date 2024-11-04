<template>
  <div class="grid grid-cols-2 gap-2 mt-5">
    <h3 class="text-xl text-gray-800 col-span-2">Social Links</h3>
    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(email)"
        >
          <Icon icon="ph:envelope-duotone" class="w-5 h-5" />
        </span>
        <input
          type="email"
          name="email"
          id="email"
          :value="email"
          @input="$emit('update:email', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="email@example.com"
        />
      </div>
      <Modal :visible="qrCodeUrl === email" @close="qrCodeUrl = null">
        <QrCode :text="`mailto:${email}`" />
      </Modal>
    </div>

    <!-- Phone -->
    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(phone)"
        >
          <Icon icon="ph:phone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="phone"
          id="phone"
          :value="phone"
          @input="$emit('update:phone', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="phone number"
        />
      </div>
      <Modal :visible="qrCodeUrl === phone" @close="qrCodeUrl = null">
        <QrCode :text="`tel:${phone}`" />
      </Modal>
    </div>

    <!-- Twitter -->
    <div>
      <label for="twitter" class="block text-sm font-medium text-gray-700">Twitter</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(twitter)"
        >
          <Icon icon="ph:twitter-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="twitter"
          id="twitter"
          :value="twitter"
          @input="$emit('update:twitter', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username(only)"
        />
      </div>
      <Modal :visible="qrCodeUrl === twitter" @close="qrCodeUrl = null">
        <QrCode :text="`https://twitter.com/${twitter}`" />
      </Modal>
    </div>

    <!-- Telegram -->
    <div>
      <label for="telegram" class="block text-sm font-medium text-gray-700">Telegram</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(telegram)"
        >
          <Icon icon="ph:telegram-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="telegram"
          id="telegram"
          :value="telegram"
          @input="$emit('update:telegram', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <Modal :visible="qrCodeUrl === telegram" @close="qrCodeUrl = null">
        <QrCode :text="`https://t.me/${telegram}`" />
      </Modal>
    </div>

    <!-- WhatsApp -->
    <div>
      <label for="whatsapp" class="block text-sm font-medium text-gray-700">WhatsApp</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(whatsapp)"
        >
          <Icon icon="mdi:whatsapp" class="w-5 h-5" />
        </span>
        <input
          type="tel"
          name="whatsapp"
          id="whatsapp"
          :value="whatsapp"
          @input="$emit('update:whatsapp', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="123-456-7890"
        />
      </div>
      <Modal :visible="qrCodeUrl === whatsapp" @close="qrCodeUrl = null">
        <QrCode :text="`https://wa.me/${whatsapp}`" />
      </Modal>
    </div>
    <!-- LinkedIn -->
    <div>
      <label for="linkedin" class="block text-sm font-medium text-gray-700">LinkedIn</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(linkedin)"
        >
          <Icon icon="ph:linkedin-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          :value="linkedin"
          @input="$emit('update:linkedin', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <Modal :visible="qrCodeUrl === linkedin" @close="qrCodeUrl = null">
        <QrCode :text="`https://linkedin.com/in/${linkedin}`" />
      </Modal>
    </div>

    <!-- Facebook -->
    <div>
      <label for="facebook" class="block text-sm font-medium text-gray-700">Facebook</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(facebook)"
        >
          <Icon icon="ph:facebook-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="facebook"
          id="facebook"
          :value="facebook"
          @input="$emit('update:facebook', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <Modal :visible="qrCodeUrl === facebook" @close="qrCodeUrl = null">
        <QrCode :text="`https://facebook.com/${facebook}`" />
      </Modal>
    </div>

    <!-- Instagram -->
    <div>
      <label for="instagram" class="block text-sm font-medium text-gray-700">Instagram</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(instagram)"
        >
          <Icon icon="ph:instagram-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="instagram"
          id="instagram"
          :value="instagram"
          @input="$emit('update:instagram', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <Modal :visible="qrCodeUrl === instagram" @close="qrCodeUrl = null">
        <QrCode :text="`https://instagram.com/${instagram}`" />
      </Modal>
    </div>

    <!-- YouTube -->
    <div>
      <label for="youtube" class="block text-sm font-medium text-gray-700">YouTube</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(youtube)"
        >
          <Icon icon="ph:youtube-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="youtube"
          id="youtube"
          :value="youtube"
          @input="$emit('update:youtube', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="@channelID"
        />
      </div>
      <Modal :visible="qrCodeUrl === youtube" @close="qrCodeUrl = null">
        <QrCode :text="`https://youtube.com/channel/${youtube}`" />
      </Modal>
    </div>

    <!-- GitHub -->
    <div>
      <label for="github" class="block text-sm font-medium text-gray-700">GitHub</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(github)"
        >
          <Icon icon="ph:github-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="github"
          id="github"
          :value="github"
          @input="$emit('update:github', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <Modal :visible="qrCodeUrl === github" @close="qrCodeUrl = null">
        <QrCode :text="`https://github.com/${github}`" />
      </Modal>
    </div>

    <!-- Discord -->
    <div>
      <label for="discord" class="block text-sm font-medium text-gray-700">Discord</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(discord)"
        >
          <Icon icon="ph:discord-logo-duotone" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="discord"
          id="discord"
          :value="discord"
          @input="$emit('update:discord', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <Modal :visible="qrCodeUrl === discord" @close="qrCodeUrl = null">
        <QrCode :text="`https://discord.com/users/${discord}`" />
      </Modal>
    </div>

    <!-- Farcaster -->
    <div>
      <label for="farcaster" class="block text-sm font-medium text-gray-700">Farcaster</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(farcaster)"
        >
          <Icon icon="material-symbols:fort-sharp" class="w-5 h-5" />
        </span>
        <input
          type="text"
          name="farcaster"
          id="farcaster"
          :value="farcaster"
          @input="$emit('update:farcaster', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <Modal :visible="qrCodeUrl === farcaster" @close="qrCodeUrl = null">
        <QrCode :text="`https://farcaster.xyz/${farcaster}`" />
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import QrCode from '../QrCode.vue'
import Modal from '../Modal.vue'

const props = defineProps({
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  twitter: { type: String, default: '' },
  telegram: { type: String, default: '' },
  whatsapp: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  facebook: { type: String, default: '' },
  instagram: { type: String, default: '' },
  youtube: { type: String, default: '' },
  github: { type: String, default: '' },
  discord: { type: String, default: '' },
  farcaster: { type: String, default: '' },
  
  
  // Add other social media props here
})

const qrCodeUrl = ref(null)

const showQRCode = (url) => {
  qrCodeUrl.value = url
}
</script>