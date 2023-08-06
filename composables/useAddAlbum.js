export function useAddAlbum () {
  const config = useRuntimeConfig()
  const { user, token } = useAuthUser()

  /** @param {FormData} formData */
  const addAlbum = async (formData) => {
    formData.append('artist_id', user.value.id)
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
    addAlbum
  }
}
