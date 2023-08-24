export function useShowService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const createShow = async (formData) => {
    const { data } = await useFetch(config.public.apiBase + '/portal/shows', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: formData
    })

    if (data.value === undefined) {
      alert('Oops! an error occured')
    } else {
      alert('Show added successfully')
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

    if (data.value === undefined) {
      alert('Oops! an error occured')
    } else {
      alert('Show updated successfully')
    }
  }

  return {
    createShow,
    updateShow
  }
}
