<script setup>
definePageMeta({
  layout: 'guest',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/discover'
  }
})
</script>
<template>
  <div>
    <SignUp />
  </div>
</template>
