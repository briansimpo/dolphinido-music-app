export function useSignUp () {
  const config = useRuntimeConfig()
  const { signin } = useSignIn()

  const signup = async (formData) => {
    const { data } = await useFetch(config.public.auth.register, {
      method: 'POST',
      body: formData
    })

    if (data) {
      const username = formData.username
      const password = formData.password
      signin(username, password)
    } else {
      alert(data.value.message)
    }
  }

  return {
    signup
  }
}
