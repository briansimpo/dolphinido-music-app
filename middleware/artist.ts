export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuthService()
  // @ts-ignore-error
  if (!user.value.is_artist) {
    return navigateTo('/discover')
  }
})
