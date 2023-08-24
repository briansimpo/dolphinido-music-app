export function useSongService () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

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
      alert('Song created successfully')
      return navigateTo('/controlroom/songs')
    }
  }

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
    }
  }

  return {
    createSong,
    updateSong
  }
}
