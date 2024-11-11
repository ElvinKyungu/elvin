// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'fr'], // used in URL path prefix
    defaultLocale: 'en', // default locale of my project for Nuxt pages and routings
  }
})