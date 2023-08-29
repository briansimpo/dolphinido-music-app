export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuthService()
  // @ts-ignore-error
  if (!user.value.is_fan) {
    return navigateTo('/discover')
  }
})
