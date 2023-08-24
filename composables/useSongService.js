export function useSongService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  /** @param {FormData} formData */
  const createSong = async (formData) => {
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
      return navigateTo('/controlroom/songs')
    }
  }

  /** @param {FormData} formData */
  const updateSong = async (id, formData) => {
    const { data } = await useFetch(config.public.apiBase + '/portal/songs/' + id, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: formData
    })

    if (data.value === undefined) {
      alert('Oops! an error occured')
    } else {
      alert('Song updated successfully')
      return data.value
    }
  }

  return {
    createSong,
    updateSong
  }
}
