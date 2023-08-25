export default defineNuxtRouteMiddleware(() => {
  const route = useRoute()
  const { user } = useAuthUser()
  const { show } = useUserShow(route.params.id)
  // @ts-ignore-error
  if (user.value.id !== show.artist_id) {
    return navigateTo('/discover')
  }
})
