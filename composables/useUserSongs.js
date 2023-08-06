export function useUserSongs () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { data } = useFetch(config.public.apiBase + '/portal/songs', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const songs = computed(() => {
    return data.value.data
  })

  return {
    songs
  }
}
