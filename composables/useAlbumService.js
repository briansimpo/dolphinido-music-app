export function useAlbumService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()
  const { successMessage, errorMessage } = useToastMessage()

  const createAlbum = async (formData) => {
    const { data } = await useFetch(config.public.apiBase + '/portal/albums', {
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
      return navigateTo('/controlroom/albums/' + data.value.id)
    }
  }

  const updateAlbum = async (id, formData) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/albums/' + id,
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

  const updateAlbumImage = async (id, formData) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/albums/' + id + '/cover_image',
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

  const publishAlbum = async (id) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/albums/' + id + '/publish',
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

  const deleteAlbum = async (id) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/albums/' + id,
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
    }
  }

  return {
    createAlbum,
    updateAlbum,
    updateAlbumImage,
    publishAlbum,
    deleteAlbum
  }
}
