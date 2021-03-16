export default {
  ssr: true,

  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title:
      'Mazino Makeovers || Book a makeover appointment with the best beauty saloon in Lagos.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid:
          'Mazino Makeovers is not just a regular beauty saloon. At Mazino Makeovers, we thrive to be the best and give you the very best makeover with a pleasant experience you would hardly forget. You are more than a guest. You are our model.',
        name:
          'Mazino Makeovers is not just a regular beauty saloon. At Mazino Makeovers, we thrive to be the best and give you the very best makeover with a pleasant experience you would hardly forget. You are more than a guest. You are our model.',
        content:
          'Hi, I am Zino Eriyamremu, CEO Mazino Makeovers. I have been in the beauty business for almost a decade. As a makeup artist, I get to mix my two passions: transforming people and fine art.\nI founded Mazino Makeovers in the year 2018, and since then has earned a remarkable reputation for being one of the best beauty saloons in Lagos state, Nigeria.\nUsually, a regular makeup artist would verbally try to convince you of a 100% guarantee service value. That, I consider a cliche. For me, I let my works speak for themselves.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/vuelidate'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  fontawesome: {
    icons: {
      solid: [
        'faAddressBook',
        'faBars',
        'faDirections',
        'faCheckSquare',
        'faArrowCircleRight',
        'faBug',
        'faTag',
        'faMapMarkerAlt',
        'faHashtag'
      ]
    }
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
};
