export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuthUser()
  // @ts-ignore-error
  if (!user.value.is_artist) {
    return navigateTo('/discover')
  }
})
