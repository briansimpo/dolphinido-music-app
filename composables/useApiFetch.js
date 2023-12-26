export async function useApiFetch (url, params) {
  const config = useRuntimeConfig()
  const { token } = useAuthService()
  const { errorMessage } = useToastMessage()
  try {
    const response = await $fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      baseURL: config.public.apiBase,
      params
    })

    return response
  } catch (error) {
    errorMessage(error)
  }
}
