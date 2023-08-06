export function useAddSong () {
  const config = useRuntimeConfig()
  const { user, token } = useAuthUser()

  /** @param {FormData} formData */
  const addSong = async (formData) => {
    formData.append('artist_id', user.value.id)
    const { data } = await useFetch(config.public.apiBase + '/portal/songs', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: formData
    })

    if (data.value === undefined) {
      alert('Oops! an error occured')
    } else {
      alert('Song added successfully')
    }
  }

  return {
    addSong
  }
}
