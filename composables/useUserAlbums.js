export function useUserAlbums () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { data } = useFetch(config.public.apiBase + '/portal/albums', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const albums = computed(() => {
    return data.value.data
  })

  return {
    albums
  }
}
