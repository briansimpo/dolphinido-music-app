export function useUserAlbum (albumId) {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { data } = useFetch(config.public.apiBase + '/portal/albums/' + albumId, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const album = computed(() => {
    return data.value
  })

  return {
    album
  }
}
