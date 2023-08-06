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
    <h1>Charts</h1>
  </div>
</template>
