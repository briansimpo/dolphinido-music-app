export function useSongsLoader () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()
  const page = ref(1)
  const limit = ref(5)
  const lastPage = ref(1)
  const data = ref([])
  const pending = ref(false)

  const getData = async (url) => {
    if (pending.value) {
      return
    }
    pending.value = true

    await $fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      baseURL: config.public.apiBase,
      params: {
        page: page.value,
        limit: limit.value
      }
    }).then(function (result) {
      appendData(result.data)
      lastPage.value = result.meta.last_page
    }).catch(function () {
      errorMessage('Error loading content')
    }).finally(function () {
      pending.value = false
    })
    return data.value
  }

  const appendData = (newData) => {
    newData.forEach((chunk) => {
      data.value.push(chunk)
    })
  }

  return {
    pending,
    getData,
    page,
    lastPage
  }
}
