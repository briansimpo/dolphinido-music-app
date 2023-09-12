export function useCountries () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  const { data } = useFetch(
    config.public.apiBase + '/country_list',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token.value}` }
    }
  )

  const countries = computed(() => {
    if (data.value) {
      return data.value
    }
  })

  return {
    countries
  }
}
