export function useAddSong () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  /** @param {FormData} formData */
  const addSong = async (formData) => {
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
