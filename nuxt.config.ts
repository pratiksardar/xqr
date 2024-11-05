export default ({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt'
  ],

  build: {
    transpile: ["@headlessui/vue"],
  },

  colorMode: {
    classSuffix: '',
  },

  head: {
    title: 'Share Socials On the Go',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Allows you to save and share your socials and links quickly' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-RKTX9XVN20',
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RKTX9XVN20');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtag': ['innerHTML']
    }
  },

  plugins: [
    '~/plugins/vercel-analytics.client.js'
  ],

  compatibilityDate: '2024-11-02',
});