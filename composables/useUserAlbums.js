export function useUserAlbums () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  const { pending, data } = useFetch(config.public.apiBase + '/portal/albums', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const albums = computed(() => {
    if (data.value) {
      return data.value
    }
  })

  return {
    pending,
    albums
  }
}
