export function useSignUp () {
  const config = useRuntimeConfig()
  const { signin } = useSignIn()

  const signup = async (formData) => {
    const { data } = await useFetch(config.public.auth.register, {
      method: 'POST',
      body: formData
    })

    if (data) {
      const email = formData.email
      const password = formData.password
      signin(email, password)
    } else {
      alert(data.value.message)
    }
  }

  return {
    signup
  }
}
