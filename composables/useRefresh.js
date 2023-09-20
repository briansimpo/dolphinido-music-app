import { refreshNuxtData } from 'nuxt/app'

export function useRefresh () {
  const refreshing = ref(false)
  const refreshData = async () => {
    refreshing.value = true
    try {
      await refreshNuxtData()
    } finally {
      refreshing.value = false
    }
  }

  return {
    refreshData
  }
}
