// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app:{
    head:{
      bodyAttrs:{
        class: "bg-black text-white font-semilbold font-mono"
      }
    }
  }
})