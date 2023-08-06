export function useCountries () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const { data } = useFetch(
    config.public.apiBase + '/country_list',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token.value}` }
    }
  )

  const countries = computed(() => {
    return data.value
  })

  return {
    countries
  }
}
