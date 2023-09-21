export function useSongService () {
  const config = useRuntimeConfig()
  const { token } = useAuthService()
  const { successMessage, errorMessage } = useToastMessage()

  const getSongs = async () => {
    const { data: songs } = await useFetch(
      config.public.apiBase + '/portal/songs',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )
    return songs.value.data
  }

  const getSong = async (songId) => {
    const { data: song } = await useFetch(
      config.public.apiBase + '/portal/songs/' + songId,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    return song.value
  }

  const getUnknownAlbum = async () => {
    const { pending, data } = await useFetch(
      config.public.apiBase + '/portal/songs/unknown_album',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    const songs = computed(() => {
      return data.value.data
    })

    return {
      pending,
      songs
    }
  }

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
      return false
    } else {
      successMessage()
      return true
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
      return false
    } else {
      successMessage()
      return true
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
      return false
    } else {
      successMessage()
      return true
    }
  }

  const publishSong = async (id) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/songs/' + id + '/publish',
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    if (data.value === null) {
      errorMessage()
      return false
    } else {
      successMessage()
      return true
    }
  }

  const deleteSong = async (id) => {
    const { data } = await useFetch(
      config.public.apiBase + '/portal/songs/' + id,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )

    if (data.value === null) {
      errorMessage()
      return false
    } else {
      successMessage()
      return true
    }
  }

  return {
    getSongs,
    getSong,
    getUnknownAlbum,
    createSong,
    updateSong,
    updateSongImage,
    publishSong,
    deleteSong
  }
}
