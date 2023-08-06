export function useSignIn () {
  const { signIn } = useAuth()

  /** @param {FormData} formData */
  const signin = async (formData) => {
    const username = formData.get('username')
    const password = formData.get('password')
    const { error, url } = await signIn('credentials', {
      username,
      password,
      redirect: false
    })

    if (error) {
      // Do your custom error handling here
      alert('Username or Password is incorrect')
    } else {
      // No error, continue with the sign in, e.g., by following the returned redirect:
      return navigateTo(url, { external: true })
    }
  }

  return {
    signin
  }
}
