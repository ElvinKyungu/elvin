// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json"
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
        file: "fr-France.json"
      }
    ],
    defaultLocale: "en",
  }
})
