export default ({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],

  build: {
      transpile: ["@headlessui/vue"],
  },

  colorMode: {
      classSuffix: '',
  },
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'G-RKTX9XVN20'
    }]
  ],

  head: {
    title: 'Share Socials On the Go',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Allows you to save and share your socials and links quickly' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ],},

  compatibilityDate: '2024-11-02',
});