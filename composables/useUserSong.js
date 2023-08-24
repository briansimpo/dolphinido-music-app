export function useUserSong (songId) {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { pending, data } = useFetch(config.public.apiBase + '/portal/songs/' + songId, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const song = computed(() => {
    return data.value
  })

  return {
    pending,
    song
  }
}
