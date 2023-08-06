export function useAuthUser () {
  const { data, status } = useAuth()

  const authenticated = computed(() => {
    if (status.value === 'authenticated') {
      return true
    } else {
      return false
    }
  })

  const role = computed(() => {
    if (data.value.user.is_fan) {
      return 'Fan'
    } else if (data.value.user.is_artist) {
      return 'Artist'
    } else if (data.value.user.is_admin) {
      return 'Admin'
    }
  })

  const user = computed(() => {
    return data.value.user
  })

  const token = computed(() => {
    return data.value.token
  })

  return {
    authenticated,
    user,
    token,
    role
  }
}
