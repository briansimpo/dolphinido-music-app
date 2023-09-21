export function useAlbumTrackService () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()
  const { errorMessage } = useToastMessage()

  const createAlbumTrack = async (formData) => {
    const { data } = await useFetch(config.public.apiBase + '/portal/albums/tracks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: formData
    })

    if (data.value === null) {
      errorMessage()
    }
  }

  const deleteAlbumTrack = async (id) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/albums/tracks/' + id,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    if (data.value === null) {
      errorMessage()
    }
  }

  return {
    createAlbumTrack,
    deleteAlbumTrack
  }
}
