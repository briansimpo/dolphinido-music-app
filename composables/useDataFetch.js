// useDataFetching.js

import { ref, onMounted, watch } from 'vue'

export default function useDataFetch (url, filter) {
  const config = useRuntimeConfig()
  const { token } = useAuthService()

  // Define a reactive array to hold the fetched data
  const data = ref([])

  // Define a function to fetch data
  async function fetchData () {
    try {
      const response = await fetch(`${config.public.apiBase}${url}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        params: filter.value // Assuming filter.value is an object with query parameters
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const result = await response.json()

      // Append the fetched data to the array
      data.value = data.value.concat(result)
    } catch (error) {
      // Handle errors if necessary
      console.error('An error occurred:', error)
    }
  }

  // Fetch data when the component is mounted and whenever filter.value changes
  onMounted(() => {
    fetchData()
  })

  // Watch for changes in filter.value and refetch data
  watch(filter, () => {
    fetchData()
  })

  return {
    data
  }
}
