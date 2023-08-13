export function useAddShow () {
  const config = useRuntimeConfig()
  const { user, token } = useAuthUser()

  /** @param {FormData} formData */
  const addShow = async (formData) => {
    formData.append('artist_id', user.value.id)
    const { data } = await useFetch(config.public.apiBase + '/portal/shows', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: formData
    })

    if (data.value === undefined) {
      alert('Oops! an error occured')
    } else {
      alert('Show added successfully')
    }
  }

  return {
    addShow
  }
}
