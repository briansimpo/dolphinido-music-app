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

  return {
    createAlbum,
    updateAlbum
  }
}
