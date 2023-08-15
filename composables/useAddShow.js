export function useAddShow () {
  const config = useRuntimeConfig()
  const { token } = useAuthUser()

  /** @param {FormData} formData */
  const addShow = async (formData) => {
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
