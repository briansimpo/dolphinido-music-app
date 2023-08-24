export function useAlbumService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  const createAlbum = async (formData) => {
    const { data } = await useFetch(config.public.apiBase + '/portal/albums', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: formData
    })

    if (data.value === undefined) {
      alert('Oops! an error occured')
    } else {
      alert('Album created successfully')
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

    if (data.value === undefined) {
      alert('Oops! an error occured')
    } else {
      alert('Album updated successfully')
    }
  }

  return {
    createAlbum,
    updateAlbum
  }
}
