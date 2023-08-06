export function useGenres () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { data } = useFetch(
    config.public.apiBase + '/genres',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token.value}` }
    }
  )

  const genres = computed(() => {
    return data.value
  })

  return {
    genres
  }
}
