<template>
    <div class="h-screen flex flex-col md:grid md:grid-cols-3 md:divide-x">
    <div class="flex-1 md:col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
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
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Add demo data </span>
          <Icon icon="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Publish </span>
          <Icon icon="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
        <!-- href="https://github.com/fayazara/onelink" -->
        <a
          href="https://github.com/pratiksardar/xqr"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Github </span>
          <Icon icon="mdi:github" class="h-4 w-4" />
        </a>
      </div>
    </div>
    <div class="md:col-span-1 h-screen flex flex-col bg-white">
      <button
        @click="togglePreview"
        class="md:hidden h-12 flex items-center justify-center bg-gray-500 text-white"
      >
        <span v-if="showPreview">Hide Preview</span>
        <span v-else>Show Preview</span>
      </button>
      <div v-show="showPreview" class="flex-1 overflow-y-auto">
        <app-form-preview :data="data" />
      </div>
    </div>
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
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
})

const showPreview = ref(false)

const togglePreview = () => {
  showPreview.value = !showPreview.value
}

const prefillDemoData = () => {
  data.value = {
    n: "Pratik ",
    d: "I’m John Snow, the king in the north. I know Nothing.",
    i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
    em: "northking@gmail.com",
    ph: "+919999999999",
    t: "john_snow",
    tg: "john_tg",
    w: "+919999999999",
    f: "john_snow",
    ig: "ursjohn",
    gh: "geekyjohn",
    y: "@johnsnowYT",
    l: "john_snow",
    fc: "john_web3",
    
    ls: [
      { l: 'My Website', i: 'ph:globe-duotone', u: 'https://example.com' },
      { l: 'Blog', i: 'mdi:blog', u: 'https://blog.example.com' }
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