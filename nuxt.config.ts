// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@sidebase/nuxt-auth'],
  typescript: {
    shim: false
  },

  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],

  build: {
    transpile: ['primevue']
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "Malawi's online music network for artists first"
        },
        {
          name: 'keywords',
          content: 'Dolphinido, Audio Fingerprint, Music Monitoring '
        }
      ],

      link: [
        { rel: 'icon', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&amp;display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&amp;display=swap'
        },
        { rel: 'stylesheet', href: '/css/plugins.bundle.css' },
        { rel: 'stylesheet', href: '/css/styles.bundle.css' }
      ],

      script: [{ src: '/js/plugins.bundle.js', body: true }]
    }
  },

  auth: {
    origin: process.env.APP_ORIGIN,
    enableGlobalAppMiddleware: true
  },

  runtimeConfig: {
    secret: process.env.APP_SECRET,

    googleAuth: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    facebookAuth: {
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    },

    public: {
      backendUrl: process.env.BACKEND_URL,
      apiBase: process.env.BACKEND_URL + '/api',
      auth: {
        register: process.env.BACKEND_URL + '/api/register',
        login: process.env.BACKEND_URL + '/api/login',
        token: process.env.BACKEND_URL + '/api/auth',
        reauth: process.env.BACKEND_URL + '/api/reauth',
        logout: process.env.BACKEND_URL + '/api/logout'
      }
    }

  }
})
