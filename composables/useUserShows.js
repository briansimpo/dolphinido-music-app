export function useUserShows () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  const { pending, data } = useFetch(config.public.apiBase + '/portal/shows', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const shows = computed(() => {
    if (data.value) {
      return data.value.data
    }
  })

  return {
    pending,
    shows
  }
}
