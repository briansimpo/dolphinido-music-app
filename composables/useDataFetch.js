import { ref, onMounted, watch } from 'vue'

export default function useDataFetch (url, params) {
  const config = useRuntimeConfig()
  const { token } = useAuthService()
  const { errorMessage } = useToastMessage()

  const data = ref([])
  const lastPage = ref(1)
  const pending = ref(false)

  const fetchData = async () => {
    if (pending.value) {
      return
    }
    pending.value = true
    try {
      const response = await $fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        baseURL: config.public.apiBase,
        params
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
    params.page = lastPage.value
    try {
      const response = await $fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        baseURL: config.public.apiBase,
        params
      })
      data.value = response.data
      lastPage.value = response.meta.last_page
    } catch (error) {
      errorMessage(error)
    } finally {
      pending.value = false
    }
  }

  const loadMore = () => {
    if (params.page <= lastPage.value) {
      params.page += 1
      fetchData()
    }
  }

  const appendData = (newdata) => {
    if (newdata.length > 0) {
      newdata.forEach((item) => {
        if (!data.value.includes(item.value)) {
          data.value.push(item)
        }
      })
    }
  }

  onMounted(() => {
    fetchData()
  })

  watch(params, () => {
    filterData()
  })

  return {
    pending,
    data,
    loadMore
  }
}
