export function useSignUp () {
  const config = useRuntimeConfig()
  const { signin } = useSignIn()

  /** @param {FormData} formData */
  const signup = async (formData) => {
    const { data } = await useFetch(config.public.auth.register, {
      method: 'POST',
      body: formData
    })

    if (data) {
      const username = formData.get('username')
      const password = formData.get('password')
      signin(username, password)
    } else {
      alert(data.value.message)
    }
  }

  return {
    signup
  }
}
