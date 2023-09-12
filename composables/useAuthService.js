export function useAuthService () {
  const config = useRuntimeConfig()
  const { data, status, signIn } = useAuth()
  const { errorMessage } = useToastMessage()

  const signup = async (formData) => {
    const { data } = await useFetch(config.public.auth.register, {
      method: 'POST',
      body: formData
    })

    if (data.value.data == null) {
      errorMessage(data.value.message)
    } else {
      const form = ref({
        username: formData.email,
        password: formData.password
      })
      signin(form.value)
    }
  }

  const signin = async (formData) => {
    const username = formData.username
    const password = formData.password
    const { error, url } = await signIn('credentials', {
      username,
      password,
      redirect: false
    })

    if (error) {
      // Do your custom error handling here
      errorMessage('Username or Password is incorrect')
    } else {
      // No error, continue with the sign in, e.g., by following the returned redirect:
      return navigateTo(url, { external: true })
    }
  }

  const authenticated = computed(() => {
    if (status.value === 'authenticated') {
      return true
    } else {
      return false
    }
  })

  const role = computed(() => {
    if (data.value.user.is_fan) {
      return 'Fan'
    } else if (data.value.user.is_artist) {
      return 'Artist'
    } else if (data.value.user.is_admin) {
      return 'Admin'
    }
  })

  const user = computed(() => {
    return data.value.user
  })

  const token = computed(() => {
    return data.value.token
  })

  return {
    signup,
    signin,
    authenticated,
    user,
    token,
    role
  }
}
