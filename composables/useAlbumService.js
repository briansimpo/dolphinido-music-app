export function useAlbumService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  /** @param {FormData} formData */
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
      alert('Album added successfully')
      return navigateTo('/controlroom/albums/' + data.value.id)
    }
  }

  return {
    createAlbum
  }
}
