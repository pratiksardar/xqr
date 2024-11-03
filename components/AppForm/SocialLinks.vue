<template>
  <base-form-section title="Social Links" description="Add socials here"></base-form-section>
  <div class="grid grid-cols-2 gap-4">
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
          type="url"
          name="facebook"
          id="facebook"
          :value="facebook"
          @input="$emit('update:facebook', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://facebook.com/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === facebook" @close="qrCodeUrl = null">
        <QrCode :text="facebook" />
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
          type="url"
          name="twitter"
          id="twitter"
          :value="twitter"
          @input="$emit('update:twitter', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://twitter.com/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === twitter" @close="qrCodeUrl = null">
        <QrCode :text="twitter" />
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
          type="url"
          name="instagram"
          id="instagram"
          :value="instagram"
          @input="$emit('update:instagram', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://instagram.com/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === instagram" @close="qrCodeUrl = null">
        <QrCode :text="instagram" />
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
          type="url"
          name="linkedin"
          id="linkedin"
          :value="linkedin"
          @input="$emit('update:linkedin', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://linkedin.com/in/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === linkedin" @close="qrCodeUrl = null">
        <QrCode :text="linkedin" />
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
          type="url"
          name="youtube"
          id="youtube"
          :value="youtube"
          @input="$emit('update:youtube', $event.target.value)"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://youtube.com/channel/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === youtube" @close="qrCodeUrl = null">
        <QrCode :text="youtube" />
      </Modal>
    </div>
    <!-- Add a + button to add custom social media link like Github , wrapcast , snapchat etc and match icons based on the name provided -->
    <!-- Custom Social Media Links -->
    <!-- <div>
      <button
      @click="addCustomLink"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
      + Add Custom Link
      </button>
    </div>
    <div v-for="(link, index) in customLinks" :key="index" class="mt-4">
      <label :for="'custom-link-' + index" class="block text-sm font-medium text-gray-700">{{ link.name }}</label>
      <div class="mt-1 flex rounded-md shadow-sm">
      <span
        class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
        @click="showQRCode(link.url)"
      >
        <Icon :icon="getIcon(link.name)" class="w-5 h-5" />
      </span>
      <input
        type="url"
        :name="'custom-link-' + index"
        :id="'custom-link-' + index"
        v-model="link.url"
        class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        :placeholder="'https://' + link.name + '.com/username'"
      />
      </div>
      <Modal :visible="qrCodeUrl === link.url" @close="qrCodeUrl = null">
      <QrCode :text="link.url" />
      </Modal>
    </div> -->
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
          type="url"
          name="github"
          id="github"
          v-model="github"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://github.com/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === github" @close="qrCodeUrl = null">
        <QrCode :text="github" />
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
          type="url"
          name="discord"
          id="discord"
          v-model="discord"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://discord.com/users/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === discord" @close="qrCodeUrl = null">
        <QrCode :text="discord" />
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
          type="url"
          name="telegram"
          id="telegram"
          v-model="telegram"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://t.me/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === telegram" @close="qrCodeUrl = null">
        <QrCode :text="telegram" />
      </Modal>
    </div>

    <!-- Farcaster -->
    <div>
      <label for="farcaster" class="block text-sm font-medium text-gray-700">Farcaster/Warpcast</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 cursor-pointer"
          @click="showQRCode(farcaster)"
        >
          <Icon icon="material-symbols:garage-door-rounded" class="w-5 h-5" />
        </span>
        <input
          type="url"
          name="farcaster"
          id="farcaster"
          v-model="farcaster"
          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://warpcast.com/username"
        />
      </div>
      <Modal :visible="qrCodeUrl === farcaster" @close="qrCodeUrl = null">
        <QrCode :text="farcaster" />
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
  facebook: { type: String, default: '' },
  twitter: { type: String, default: '' },
  instagram: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  youtube: { type: String, default: '' },
  // Add other social media props here
})

const qrCodeUrl = ref(null)

const showQRCode = (url) => {
  qrCodeUrl.value = url
}
</script>