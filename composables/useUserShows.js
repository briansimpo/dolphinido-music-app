export function useUserShows () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { data } = useFetch(config.public.apiBase + '/portal/shows', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const shows = computed(() => {
    return data.value.data
  })

  return {
    shows
  }
}
