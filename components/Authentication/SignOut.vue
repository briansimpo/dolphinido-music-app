<script setup>
const { signOut } = useAuth()

const handleSignout = () => {
  signOut({
    callbackUrl: '/login'
  })
}
</script>
<template>
  <button class="dropdown-item d-flex align-items-center external text-danger" @click="handleSignout">
    <i class="ri-logout-circle-line fs-5" />
    <span class="ps-2">Logout</span>
  </button>
</template>
