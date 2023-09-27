<script setup>
const { signIn } = useAuth()

const googleSignIn = async () => {
  await signIn('google', {
    callbackUrl: '/discover'
  })
}
</script>

<template>
  <button class="btn btn-outline btn-default mb-2 w-100" @click="googleSignIn">
    <div class="btn__wrap">
      <i class="ri-google-fill" />
      <span class="ms-2">Continue with Google</span>
    </div>
  </button>
</template>
