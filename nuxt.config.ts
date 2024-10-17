// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/index.scss',
  ],
  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/ui', prefix: 'ui', extensions: ['vue'] }
  ],
})
