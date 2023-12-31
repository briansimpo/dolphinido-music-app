export function useGenres () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  const { data } = useFetch(
    config.public.apiBase + '/genres',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token.value}` }
    }
  )

  const genres = computed(() => {
    if (data.value) {
      return data.value
    }
  })

  return {
    genres
  }
}
