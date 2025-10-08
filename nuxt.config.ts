// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    mongoUri: process.env.MONGODB_URI
  },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: ['red']
    }
  }
})
