export function useSignIn () {
  const { signIn } = useAuth()
  const { errorMessage } = useToastMessage()

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

  return {
    signin
  }
}
