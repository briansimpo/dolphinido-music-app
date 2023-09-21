export function useShowService () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()
  const { successMessage, errorMessage } = useToastMessage()

  const getShows = async () => {
    const { data: shows } = await useFetch(
      config.public.apiBase + '/portal/shows',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )
    return shows.value.data
  }

  const getShow = async (showId) => {
    const { show } = await useFetch(
      config.public.apiBase + '/portal/shows/' + showId,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    return show.value
  }

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

  const updateShowImage = async (id, formData) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/shows/' + id + '/cover_image',
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

  const publishShow = async (id) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/shows/' + id + '/publish',
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    if (data.value === null) {
      errorMessage()
    } else {
      successMessage()
    }
  }

  const deleteShow = async (id) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/shows/' + id,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    if (data.value === null) {
      errorMessage()
    } else {
      successMessage()
      return navigateTo('/controlroom/shows')
    }
  }

  return {
    getShows,
    getShow,
    createShow,
    updateShow,
    updateShowImage,
    publishShow,
    deleteShow
  }
}
