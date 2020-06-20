
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Piedra&family=Roboto:wght@300;400&display=swap"'}

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // [
      '@nuxtjs/pwa',
      '@nuxtjs/firebase',
      
    // ]
  ],

   //Nuxt-Fire Module Options
   firebase: {
    config: {
      apiKey: "AIzaSyBUE57LAH2Ni5Xp7FRHECxkp-b7ECRlox4",
      authDomain: "dbdebt-d1da3.firebaseapp.com",
      databaseURL: "https://dbdebt-d1da3.firebaseio.com",
      projectId: "dbdebt-d1da3",
      storageBucket: "dbdebt-d1da3.appspot.com",
      messagingSenderId: "848342549212",
      appId: "1:848342549212:web:091cd0b2a2109da9c92a19",
      // measurementId: "G-XT6PVC1D4X",
      // fcmPublicVapidKey:
      //   "BL_xoiuOe5vbb2vJkCNnuswn03NwCsyCkJUgRbuQA5tpg7J4E4z50MO8b-wrrad6fcysYAaFjHqU7D9o0oCWL8w"
    },
    services: {
      firestore: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
