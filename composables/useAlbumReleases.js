export function useAlbumReleases () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  const { data } = useFetch(
    config.public.apiBase + '/album_releases',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token.value}` }
    }
  )

  const albumReleases = computed(() => {
    return data.value
  })

  return {
    albumReleases
  }
}
