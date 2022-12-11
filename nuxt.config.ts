// https://nuxt.com/docs/api/configuration/nuxt-config
// import NuxtUmami from 'nuxt-umami';

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-umami',
  ],
  umami: {
    // enable: false,
    autoTrack: false,
    scriptUrl: 'http://localhost:6000/umami.js',
    websiteId: '5e1eeffc-821f-4d52-a214-e357c1e39ad5',
  },
  app: {
    head: {
      title: 'Nuxt Umami Testing',
    },
  },
  css: ['@unocss/reset/tailwind.css'],
});
