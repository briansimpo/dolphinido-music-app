import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { NuxtAuthHandler } from '#auth'

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: config.secret,

  pages: {
    signIn: '/login'
  },

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: config.googleAuth.clientId,
      clientSecret: config.googleAuth.clientSecret
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      async authorize (credentials: any) {
        const { data: user }: any = await $fetch(config.public.auth.login, {
          method: 'POST',
          body: JSON.stringify(credentials)
        })

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],

  callbacks: {
    jwt ({ token, user }) {
      if (user) {
        // @ts-ignore api token or access token
        token.token = user.api_token

        // user object from api endpoint
        token.user = user
      }
      return token
    },
    session ({ session, token }) {
      if (token.user) {
        // @ts-ignore api token or access token from token object
        session.token = token.token

        // user object from token object
        session.user = token.user
      }
      return session
    }
  }
})
