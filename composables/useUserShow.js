export function useUserShow (showId) {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { data } = useFetch(config.public.apiBase + '/portal/shows/' + showId, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const show = computed(() => {
    return data.value
  })

  return {
    show
  }
}
