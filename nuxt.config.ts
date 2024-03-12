// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@formkit/auto-animate'
  ],
  googleFonts: {
    families: {
      Merriweather: [300, 400, 500, 600]
    }
  }
})
