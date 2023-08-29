export function useRegisterService () {
  const config = useRuntimeConfig()
  const { user, token } = useAuthService()
  const { successMessage, errorMessage } = useToastMessage()

  /** @param {FormData} formData */
  const register = async (formData) => {
    formData.append('user_id', user.value.id)

    const { data } = await useFetch(config.public.apiBase + '/portal/artist', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.value}` },
      body: formData
    })
    if (data.value === null) {
      errorMessage()
    } else {
      successMessage('Your account has been created')
      user.value.is_artist = true
      return navigateTo('/controlroom')
    }
  }

  return {
    register
  }
}
