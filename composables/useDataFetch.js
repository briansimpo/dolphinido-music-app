// useDataFetching.js

import { ref, onMounted, watch } from 'vue'

export default function useDataFetch (url, params) {
  const config = useRuntimeConfig()
  const { token } = useAuthService()
  const { errorMessage } = useToastMessage()
  const apiUrl = url
  const filter = params

  // Define a reactive array to hold the fetched data
  const datalist = ref([])
  const lastPage = ref(1)
  const pending = ref(false)

  const fetchData = async () => {
    if (pending.value) {
      return
    }
    pending.value = true
    try {
      const response = await $fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        baseURL: config.public.apiBase,
        params: filter
      })
      appendData(response.data)
      lastPage.value = response.meta.last_page
    } catch (error) {
      errorMessage(error)
    } finally {
      pending.value = false
    }
  }

  const filterData = async () => {
    if (pending.value) {
      return
    }

    pending.value = true
    filter.page = lastPage.value
    try {
      const response = await $fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        baseURL: config.public.apiBase,
        params: filter
      })
      datalist.value = response.data
      lastPage.value = response.meta.last_page
    } catch (error) {
      errorMessage(error)
    } finally {
      pending.value = false
    }
  }

  const appendData = (data) => {
    if (data.length > 0) {
      data.forEach((item) => {
        if (!datalist.value.includes(item.value)) {
          datalist.value.push(item)
        }
      })
    }
  }

  // Fetch data when the component is mounted and whenever filter.value changes
  onMounted(() => {
    fetchData()
  })

  // Watch for changes in filter.value and refetch data
  watch(filter, () => {
    filterData()
  })

  return {
    pending,
    datalist,
    lastPage
  }
}
