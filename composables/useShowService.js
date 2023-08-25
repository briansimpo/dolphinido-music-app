export function useShowService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()
  const { successMessage, errorMessage } = useToastMessage()

  const createShow = async (formData) => {
    const { data } = await useFetch(config.public.apiBase + '/portal/shows', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: formData
    })

    if (data.value === null) {
      errorMessage()
    } else {
      successMessage()
      return navigateTo('/controlroom/shows')
    }
  }

  const updateShow = async (id, formData) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/shows/' + id,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        body: formData
      }
    )

    if (data.value === null) {
      errorMessage()
    } else {
      successMessage()
    }
  }

  return {
    createShow,
    updateShow
  }
}
