<template>
  <div class="h-screen flex flex-col md:flex-row">
    <div :class="{'flex-1': !showPreview, 'md:w-2/3': showPreview, 'h-screen': true, 'flex': true, 'flex-col': true, 'bg-slate-100': true, 'items-center': !showPreview, 'justify-center': !showPreview, 'p-8': true}">
      <div :class="{'w-full': !showPreview, 'flex-1': showPreview, 'overflow-y-auto': true, 'md:w-2/3': !showPreview}">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.em"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
          v-model:phone="data.ph"
          v-model:discord="data.dc"
          v-model:farcaster="data.fc"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
        <div class="h-16"></div> <!-- Add some spacing at the bottom -->
      </div>
    </div>

    <div v-if="showPreview" class="md:w-1/3 h-screen flex flex-col bg-white">
      <div class="flex-1 overflow-y-auto">
      <app-form-preview :data="data" />
      </div>
    </div>
    <footer class="fixed bottom-0 left-0 right-0 bg-white border-t flex items-center justify-between p-2">
      <button
      @click="prefillDemoData"
      class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
      >
      <span> Fill Demo data </span>
      <Icon icon="mdi:code-json" class="h-4 w-4" />
      </button>
      <div class="flex space-x-3">
        <button
        @click="togglePreview"
        class="h-12 flex items-center justify-center bg-gray-500 text-white px-6 py- rounded-full"
      >
        <span v-if="showPreview">Hide Preview</span>
        <span v-else>Show Preview</span>
      </button>
      <button
        @click="publish"
        class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-green-500 text-white rounded-full"
      >
        <span> Publish & Generate Card </span>
        <Icon icon="ph:paper-plane-tilt-bold" class="h-4 w-7" />
      </button>
      </div>
      <a
      href="https://github.com/pratiksardar/xqr"
      target="_blank"
      class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
      >
      <span>  </span>
      <Icon icon="mdi:github" class="h-4 w-4" />
      </a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppFormProfile from '~/components/AppForm/Profile.vue'
import AppFormHr from '~/components/AppForm/Hr.vue'
import AppFormSocialLinks from '~/components/AppForm/SocialLinks.vue'
import AppFormLinks from '~/components/AppForm/Links.vue'
import AppFormPreview from '~/components/AppForm/Preview.vue'
import { Icon } from '@iconify/vue'

const data = ref({
  n: '',
  d: '',
  i: '',
  f: '',
  t: '',
  ig: '',
  gh: '',
  dc: '',
  tg: '',
  fc: '',
  ph: '',
  w: '',
  em: '',
  ls: []
})

const showPreview = ref(false) // Set to false by default

const togglePreview = () => {
  showPreview.value = !showPreview.value
}

const prefillDemoData = () => {
  data.value = {
    n: 'John Snow ',
    d: 'I’m John Snow, the king in the north. I know Nothing.',
    i: 'https://i.insider.com/56743fad72f2c12a008b6cc0',
    em: 'northking@gmail.com',
    ph: '+919999999999',
    t: 'john_snow',
    tg: 'john_tg',
    w: '+919999999999',
    f: 'john_snow',
    ig: 'ursjohn',
    gh: 'geekyjohn',
    y: '@johnsnowYT',
    l: 'john_snow',
    fc: 'john_web3',
    ls: [
      { l: 'ETH Wallet', i: 'mdi:wallet', u: '0xF8EE592966AF83F49ec025664b525BCf907B20F5' },
      { l: 'My Resume', i: 'ph:rocket', u: 'https://rxresu.me/radarsardar/pratik-sardar-q-a-l-e-a-d-11-yo-e' }
    ]
  }
}

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copied to clipboard')
  })
}
</script>