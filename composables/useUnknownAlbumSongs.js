export function useUnknownAlbumSongs () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  const { pending, data } = useFetch(config.public.apiBase + '/portal/unknown_album_songs', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const songs = computed(() => {
    if (data.value) {
      return data.value.data
    }
  })

  return {
    pending,
    songs
  }
}
