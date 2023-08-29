export default defineNuxtRouteMiddleware(() => {
  const route = useRoute()
  const { user } = useAuthService()
  const { song } = useUserSong(route.params.id)
  // @ts-ignore-error
  if (user.value.id !== song.artist_id) {
    return navigateTo('/discover')
  }
})
