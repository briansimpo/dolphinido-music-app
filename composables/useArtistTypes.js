export function useArtistTypes () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  const { data } = useFetch(
    config.public.apiBase + '/artist_types',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token.value}` }
    }
  )

  const artistTypes = computed(() => {
    return data.value
  })

  return {
    artistTypes
  }
}
