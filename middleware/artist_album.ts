export default defineNuxtRouteMiddleware(() => {
  const route = useRoute()
  const { user } = useAuthService()
  const { album } = useUserAlbum(route.params.id)
  // @ts-ignore-error
  if (user.value.id !== album.artist_id) {
    return navigateTo('/discover')
  }
})
