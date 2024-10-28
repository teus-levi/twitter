// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      bodyAttrs:{
        class: "bg-black text-white font-semilbold font-mono"
      }
    }
  }
})