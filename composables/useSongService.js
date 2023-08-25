export function useSongService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()
  const { successMessage, errorMessage } = useToastMessage()

  const createSong = async (formData) => {
    const { data } = await useFetch(config.public.apiBase + '/portal/songs', {
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
      return navigateTo('/controlroom/songs')
    }
  }

  const updateSong = async (id, formData) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/songs/' + id,
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

  const updateSongImage = async (id, formData) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/songs/' + id + '/cover_image',
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
    createSong,
    updateSong,
    updateSongImage
  }
}
