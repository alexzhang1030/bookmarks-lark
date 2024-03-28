// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
  components: {
    dirs: [
      '~/components',
      '~/components/ui',
    ],
  },
})
