<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
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
        <a
          href="https://github.com/fayazara/onelink"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Github </span>
          <Icon icon="mdi:github" class="h-4 w-4" />
        </a>
      </div>
    </div>
    <app-form-preview :data="data" />
    <a
      href="https://twitter.com/fayazara"
      target="_blank"
      class="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500"
    >
      Made by Fayaz
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { encodeData } from "../utils/transformer"

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
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://pratiksardar.github.io",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  }
}

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard")
  })
}
</script>