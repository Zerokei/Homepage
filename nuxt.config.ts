// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/color.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  googleFonts: {
    families: {
      Merriweather: [300, 400, 500, 600],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

})
