export function useSignUp () {
  const config = useRuntimeConfig()
  const { signin } = useSignIn()
  const { errorMessage } = useToastMessage()

  const signup = async (formData) => {
    const { data } = await useFetch(config.public.auth.register, {
      method: 'POST',
      body: formData
    })

    if (data.value.data == null) {
      errorMessage(data.value.message)
    } else {
      const email = formData.email
      const password = formData.password
      signin(email, password)
    }
  }

  return {
    signup
  }
}
